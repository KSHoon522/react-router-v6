function Home() {
  const users: any = [];
  return <h1>{users[0].name}</h1>; //일부러 에러를 발생시킴
}

export default Home;
