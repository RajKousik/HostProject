import "./rightBar.scss";

import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

import { Link } from "react-router-dom";



const RightBar = () => {



  const object = JSON.parse(localStorage.getItem("user"));
  const user_id = object.id;

  const { isLoading, error, data } = useQuery(["users"], () =>
    makeRequest.get("/getUsers?userId=" + user_id).then((res) => {
      return res.data;
    })


  );



  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          {
            error
              ? "Something went wrong"
              : isLoading
              ? "loading"
              : data.map((users) => 
                (
                  <div className="user">
                  <div className="userInfo">
                    <img src={"/upload/" + users.profilePic}
                      alt=""
                    />
                    <span>{users.name}</span>
                  </div>
                  <div className="buttons">
                    <Link to={`/profile/${users.id}`} style={{ textDecoration: "none" }}>
                      <button className = "green"> View Profile</button>
                    </Link>
                    
                    <button className="red">dismiss</button>
                  </div>
                </div>
                ))
            }
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Raj</span> changed his cover picture
              </p>
            </div>
            <span>3 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p>
                <span>Sanjay</span> added a new post
              </p>
            </div>
            <span>10 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/16085452/pexels-photo-16085452.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <p>
                <span>Emilia</span> joined Connectify! Say Hi!
              </p>
            </div>
            <span>45 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/16160402/pexels-photo-16160402.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <p>
                <span>Clarke Doe</span> added a new story
              </p>
            </div>
            <span>2 hrs ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>John</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Danaerys</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Damon</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Stephen</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Abby</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>MS Dhoni</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Vijay</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/14415220/pexels-photo-14415220.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Akshith</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/14406511/pexels-photo-14406511.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Chandru</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/14396021/pexels-photo-14396021.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Michael</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/14392211/pexels-photo-14392211.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div className="online" />
              <span>Leo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
