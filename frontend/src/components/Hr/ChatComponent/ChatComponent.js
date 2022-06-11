import React,{useEffect, useState} from "react";
import { Container, Col } from "react-bootstrap";
import "./ChatComponent.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { allMessage,recieverIdAction } from '../../../Redux/Actions/SocketAction';


const ChatComponent = () => {
    const messages = useSelector((state)=>state.messages);
    const userId = useSelector((state) => state.userId);
    const [contacts, setContacts] = useState([])
    const [myMessage, setMyMessage] = useState("")
    const socket = useSelector(state => state.socketIO)
    const dispatch = useDispatch()
    const fetchUser = async ()=>{
        try {
            const {data} = await axios.get(`http://127.0.0.1:8000/chat_app/chat/${userId.userId}`)
            console.log(data)
            setContacts(data)
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(()=>{
        fetchUser()
        handleMessages()
    },[])

    const [receiverId, setReceiverId] = useState(0)
    const [coverId, setConverId] = useState(0)

    const handleMessages = (conversation_id, receiver_id) => {
        console.log(conversation_id,"       ", receiver_id);
        dispatch(recieverIdAction(receiverId))
        setReceiverId(receiver_id)
        setConverId(conversation_id)

        axios.get(`http://localhost:8080/messages?conversation_id=${conversation_id}` ).then(res => {
            console.log(res);
            dispatch(allMessage(res.data.messages))

        }).catch(err => {
            console.log(err);
        })
    }


    const handleSendMessage = () => {
        socket.emit("message", {
             conversation_id: coverId,
             receiver: receiverId,
             message:myMessage,
             sender:userId.userId
            })
         
    }


  return (
    <Container>
      <div className="wrapper">
        <div className="card radius shadowDepth1 shadow-lg" style={{height:"500px"}}>
          <div className="card__content card__padding">

<div class="container">
<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card chat-app" style={{height:"451px"}}>
            <div id="plist" class="people-list">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa fa-search"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Search..." />
                </div>
                <ul class="list-unstyled chat-list mt-2 mb-0">
                {
    contacts.map((data) => {

        var user = null
        if(data.user1 == userId.userId){
            user =  {id : data.user2, name: data.user2__id}
        }else{
            user = {id : data.user1, name: data.user1__id}
        }

        return(
            <>
               <li class="clearfix" onClick={()=>handleMessages(data.id, user.id)}>
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar" />
                    <div class="about">
                        <div class="name">{user.name}</div>
                        <div class="status"> <i class="fa fa-circle offline"></i> left 7 mins ago </div>                                            
                    </div>
                </li>
            </>
        )

    })
}
                   
                 
                  
                </ul>
            </div>
            <div class="chat">
                <div class="chat-header clearfix">
                    <div class="row">
                        <div class="col-lg-6">
                            <a data-toggle="modal" data-target="#view_info">
                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                            </a>
                            <div class="chat-about">
                                <h6 class="m-b-0">Aiden Chavez</h6>
                                <small>Last seen: 2 hours ago</small>
                            </div>
                        </div>
                        <div class="col-lg-6 hidden-sm text-right">
                            <a class="btn btn-outline-secondary"><i class="fa fa-camera"></i></a>

                        </div>
                    </div>
                </div>
                <div class="chat-history scrollbar scrollbar-primary " style={{overflow:"scroll", height:"270px"}} >
                    <ul class="m-b-0">
                        
                    {messages.map((data) =>{
                                var style = null
                                if(data.sender == userId.userId){
                                    style={display:'flex',justifyContent:'right'}
                                }
                                else{
                                    style={display:'flex',justifyContent:'left'}
                                }

                                return(
                                    <li className="clearfix " style={style} >
                                    <div class="message-data">
                                      <span class="message-data-time">
                                        10:12 AM, Today
                                      </span>
                                    </div>
                                    <div class="message my-message">
                                      {data.message}
                                    </div>
                                  </li>
    
                                )
                            } )
                        }
                     {/* {       
                    messages.map((data)=> <li class="clearfix">
                            <div class="message-data text-right">
                                <span class="message-data-time">10:10 AM, Today</span>
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                            </div>
                            <div class="message other-message float-right">{data.message}</div>
                        </li>
                    )
               } */}
                   
                    </ul>
                </div>
                <div class="chat-message clearfix" >
                    <div class="input-group mb-0">
                        <div class="input-group-prepend" onClick={handleSendMessage}>
                            <span class="input-group-text"><i class="fa fa-send"></i></span>
                        </div>
                        <input  onChange={(e)=>setMyMessage(e.target.value)} type="text" class="form-control" placeholder="Enter text here..." />                                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

          </div>
        </div>
      </div>
    </Container>
  );
};

export default ChatComponent;
