import Card from "./components/Card";

const userDetails = [
  {
    username: "Muhammed Shammeem",
    designation: "Managing Partner",
    imgUrl:
      "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1472",
    details: "Lorem ipsum dolor sit amet",
  },
  {
    username: "Muhammed Muzammil",
    designation: "Managing Partner",
    imgUrl:
      "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1472",
    details: "Lorem ipsum dolor sit amet",
  },
  {
    username: "Abdunnazir A.M",
    designation: "Managing Partner",
    imgUrl:
      "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1472",
    details: "Lorem ipsum dolor sit amet,",
  },
  {
    username: "Shamsudheen",
    designation: "Managing Partner",
    imgUrl:
      "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1472",
    details: "Lorem ipsum dolor sit amet,",
  },
];

const App = () => {
  return (
    <div className="app">
      <main className="container">
        {userDetails.map((item, index) => (
          <Card
            key={index}
            username={item.username}
            imgUrl={item.imgUrl}
            details={item.details}
            designation={item.designation}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
