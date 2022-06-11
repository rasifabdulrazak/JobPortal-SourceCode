import React, { useEffect, useState } from "react";
import "./PlanPayment.css";
import { Col, Container,Button, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

var userId=null
var params = null
const PlanPayment = () => {
  
  const [plans, setPlans] = useState();
  const [price, setPrice] = useState();
  params = useParams()
  userId = useSelector((state) => state.userId);
  const paymentDetail = async () => {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/premium_plans/${params.id}/`
    );
    setPrice(data.plan_rate);
    console.log(data);
    setPlans(data);
  };
  useEffect(() => {
    paymentDetail();
    console.log(userId.userId)
  }, []);

  return (
    <>
      <Container>
        <Row>
          <div className="wrappere">
            <div className="card radius shadowDepth1 shadow-lg">
              <div className="card__content card__padding">
                <main className="page payment-page">
                  <section className="payment-form dark">
                    <div className="container">
                      <div className="block-heading">
                        <h2>Payment</h2>
                        <p>
                          By making this payment you will be a premium customer
                          with lots of features,
                        </p>
                      </div>
                      <form>
                        <div className="products">
                          <h3 className="title text-dark">
                            {plans && plans.plan_name}
                          </h3>
                          <div className="item">
                            <span className="price">
                              Rate : ₹ {plans && plans.plan_rate}
                            </span>
                            <p className="item-name">
                              Duration : {plans && plans.duration} Months
                            </p>
                            <p className="item-description">
                              {plans && plans.plan_description}
                            </p>
                          </div>

                          <div className="total">
                            Total
                            <span className="price">
                              ₹ {plans && plans.plan_rate} <hr />
                            </span>
                          </div>
                        </div>
                        <Row>
                          <Col sm={6}>
                            <div className="card-details">
                              <h3 className="title text-dark">Pay With Razopay</h3>
                              <div className="row">
                                <Button
                                  onClick={() => makePayment(price)}
                                  type="button"
                                  variant='primary'
                                >
                                  Razorpay
                                </Button>
                              </div>
                            </div>
                          </Col>
                          <Col sm={6}>
                            <div className="card-details">
                              <h3 className="title text-dark">Pay With Paypal</h3>
                              <div className="row">
                                <Button type="button"  variant='warning'>
                                  Paypal
                                </Button>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </form>
                    </div>
                  </section>
                </main>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default PlanPayment;

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export const makePayment = async (price) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  

  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  var response = null;

  try {
    response = await axios.post("http://127.0.0.1:8000/users/user_payment/", {
      price: price,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }

  const options = {
    key: "rzp_test_n3TMXvSq8eYRqw",
    currency: response.data.currency,
    amount: response.data.amount.toString(),
    order_id: response.data.id,
    name: "SOLUTIONS",
    description: "Make the payment to complete the process",
    image:
      "http://datainfomobility.com/wp-content/uploads/2015/04/Man-holding-Globe-Solutions1.jpg",
    handler: async (response) => {
      // Razorpay order detials and order detials are passed to backed
      console.log(
        "=================  Request started     ======================",
        response
      );
      try {
        console.log(userId.userId)
        
        const datas={
          user:userId.userId,
          plan:parseInt(params.id),
          
        }
        console.log(datas)
        await axios.post('http://127.0.0.1:8000/users/payment_success/',datas)
        
        console.log("++++++++++++++++++++++++")
        
        
      } catch (error) {
        console.log(error.response)
      }

      // try {
      //     await axios.post("/order/", {
      //         buyer_id: user,
      //         amount: packageData.price,
      //         package_id: packageData.package_id,
      //         razorpay_order_id: response.razorpay_order_id,
      //         razorpay_payment_id: response.razorpay_payment_id,
      //     })
      //     console.log("///////////////////////////////////////////////////////////////////////////////");
      //     callBack()
      //     console.log("***************************");
      // } catch (error) {
      //     console.log(error);
      // }
      // console.log("=================  Resquest completed  ======================");

    },
    prefill: {
      name: "Mohammed Rasif",
      email: "rasifrazak123@gmail.com",
      phone_number: "9744088812",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
