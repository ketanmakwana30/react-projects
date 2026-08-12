import Navbar from "./components/Header/Navbar.jsx";
import MainPage from "./components/MainPage.jsx";

const App = () => {
  const users = [
    {
      img: "https://images.pexels.com/photos/13743891/pexels-photo-13743891.jpeg",
      tag: "Satisfied",
    },
    {
      img: "https://i.pinimg.com/736x/7a/ea/08/7aea08c5323513c0a4c28ff5cb4d5d14.jpg",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Underbanked",
    },
    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Completed",
    },
    {
      img: "https://images.pexels.com/photos/7034735/pexels-photo-7034735.jpeg",
      tag: "Average",
    },
  ];
  return (
    <div>
      <Navbar />
      <MainPage user={users} />
    </div>
  );
};

export default App;
