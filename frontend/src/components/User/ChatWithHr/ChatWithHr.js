import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  allMessage,
  recieverIdAction,
} from "../../../Redux/Actions/SocketAction";

const ChatWithHr = () => {
  const messages = useSelector((state) => state.messages);
  const userId = useSelector((state) => state.userId);
  const scrollContainerStyle = { width: "100%", maxHeight: "100px" };
  const [contacts, setContacts] = useState([]);
  // const [messages, setMessages] = useState([])
  const [myMessage, setMyMessage] = useState("");
  const socket = useSelector((state) => state.socketIO);
  const dispatch = useDispatch();

  const fetchHr = async () => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/chat_app/chat/${userId.userId}`
      );
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchHr();
  }, []);

  const [receiverId, setReceiverId] = useState(0);
  const [coverId, setConverId] = useState(0);

  const handleMessages = (conversation_id, receiverId) => {
    console.log(conversation_id);
    console.log(receiverId);

    dispatch(recieverIdAction(receiverId));

    setReceiverId(receiverId);
    setConverId(conversation_id);

    axios
      .get(`http://localhost:8080/messages?conversation_id=${conversation_id}`)
      .then((res) => {
        console.log(res.data.messages);
        dispatch(allMessage(res.data.messages));
        // setMessages(res.data.messages)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSendMessage = () => {
    socket.emit("message", {
      conversation_id: coverId,
      receiver: receiverId,
      message: myMessage,
      sender: userId.userId,
    });
  };

  return (
    <Container>
      <div className="wrapper">
        <div
          className="card radius shadowDepth1 shadow-lg"
          style={{ height: "500px" }}
        >
          <div className="card__content card__padding">
            <div className="container">
              <div className="row clearfix">
                <div className="col-lg-12">
                  <div className="card chat-app" style={{ height: "451px" }}>
                    <div id="plist" className="people-list">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-search"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                        />
                      </div>
                      <ul className="list-unstyled chat-list mt-2 mb-0">
                        {contacts.map((data) => {
                          var user = null;
                          if (data.user1 == userId.userId) {
                            user = { id: data.user2, name: data.user2__id };
                          } else {
                            user = { id: data.user1, name: data.user1__id };
                          }

                          return (
                            <>
                              <li
                                className="clearfix"
                                onClick={() => handleMessages(data.id, user.id)}
                              >
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                  alt="avatar"
                                />
                                <div className="about">
                                  <div className="name">{user.name}</div>
                                  <div className="status">
                                    {" "}
                                    <i className="fa fa-circle offline"></i>{" "}
                                    left 7 mins ago{" "}
                                  </div>
                                </div>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="chat">
                      <div className="chat-header clearfix">
                        <div className="row">
                          <div className="col-lg-6">
                            <a data-toggle="modal" data-target="#view_info">
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                alt="avatar"
                              />
                            </a>
                            <div className="chat-about">
                              <h6 className="m-b-0">Aiden Chavez</h6>
                              <small>Last seen: 2 hours ago</small>
                            </div>
                          </div>
                          <div className="col-lg-6 hidden-sm text-right">
                            <a className="btn btn-outline-secondary">
                              <i className="fa fa-camera"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className=" scrollbar " style={scrollContainerStyle}>
                        <div
                          className="chat-history "
                          style={{ overflow: "scroll", height: "270px" }}
                        >
                          <ul className="m-b-0">
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
                         
                          </ul>
                        </div>
                        x
                      </div>
                      <div
                        className="chat-message clearfix"
                        style={{ marginTop: "179px" }}
                      >
                        <div className="input-group mb-0">
                          <div
                            className="input-group-prepend"
                            onClick={handleSendMessage}
                          >
                            <span className="input-group-text">
                              <i className="fa fa-send"></i>
                            </span>
                          </div>
                          <input
                            onChange={(e) => setMyMessage(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter text here..."
                          />
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

export default ChatWithHr;
