import Cards from "./components/Cards";
import Header from "./components/Header";

const App = () => {
  const users = [
    {
      name: "Rahul Sharma",
      profileImg: "https://randomuser.me/api/portraits/men/2.jpg",
      profession: "Software Developer",
      age: 24,
      city: "Surat",
    },
    {
      name: "Priya Shah",
      profileImg: "https://randomuser.me/api/portraits/women/1.jpg",
      profession: "UI/UX Designer",
      age: 22,
      city: "Vadodara",
    },
    {
      name: "Amit Kumar",
      profileImg: "https://randomuser.me/api/portraits/men/3.jpg",
      profession: "Frontend Developer",
      age: 25,
      city: "Mumbai",
    },
    {
      name: "Neha Patel",
      profileImg: "https://randomuser.me/api/portraits/women/2.jpg",
      profession: "Graphic Designer",
      age: 23,
      city: "Rajkot",
    },
    {
      name: "Rohan Mehta",
      profileImg: "https://randomuser.me/api/portraits/men/4.jpg",
      profession: "Backend Developer",
      age: 27,
      city: "Pune",
    },
    {
      name: "Anjali Desai",
      profileImg: "https://randomuser.me/api/portraits/women/3.jpg",
      profession: "Digital Marketer",
      age: 26,
      city: "Delhi",
    },
    {
      name: "Vishal Joshi",
      profileImg: "https://randomuser.me/api/portraits/men/5.jpg",
      profession: "Data Analyst",
      age: 28,
      city: "Bangalore",
    },
    {
      name: "Sneha Patel",
      profileImg: "https://randomuser.me/api/portraits/women/4.jpg",
      profession: "Content Writer",
      age: 21,
      city: "Ahmedabad",
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-950 flex-wrap flex justify-center items-center min-h-screen gap-10 h-100% p-10">
        {users.map(function (elem) {
          return (
            <Cards
              img={elem.profileImg}
              name={elem.name}
              profession={elem.profession}
              age={elem.age}
              city={elem.city}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
