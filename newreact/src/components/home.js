import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const arr = [
    {
      title: "Hamza",
      id: 231321,
      description: "React Developer",
    },
    {
      title: "Talha",
      id: 213343344,
      description: "Java Developer",
    },
    {
      title: "Anas",
      id: 11111,
      description: "DataBase Engineer",
    },
  ];
  const navigate = useNavigate();
  const MoveCard = (e) => {
    navigate("login", {
      state: e,
    });
  };
  return (
    <>
      {arr.map((e, i) => {
        return (
          <>
            <Button key={i} onClick={() => MoveCard(e)}>{e.title}</Button>
          </>
        );
      })}
    </>
  );
}
export default Home;
//prams
//profile/:id