import { useEffect, useState } from "react";

function BoardGames() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  // const [Id, setId] = useState(23);
  const [Name, setName] = useState("");
  const [Year, setYear] = useState("");
  const [MinPlayers, setMinPlayers] = useState("");
  const [MaxPlayers, setMaxPlayers] = useState("");
  const [PlayTime, setPlayTime] = useState("");
  const [MinAge, setMinAge] = useState("");
  const [UsersRated, setUsersRated] = useState("");
  const [RatingAverage, setRatingAverage] = useState("");
  const [BGGRank, setBGGRank] = useState("");
  const [ComplexityAverage, setComplexityAverage] = useState("");
  const [OwnedUsers, setOwnedUsers] = useState("");
  const [CreatedDate, setCreatedDate] = useState("");
  const [LastModifiedDate, setLastModifiedDate] = useState("");

  useEffect(() => {
    fetch("https://localhost:55222/boardgames")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Ensure loading is set to false even if there's an error
      });
  }, []);

  const addnew = (e) => {
    console.log(Name);
    console.log(
      JSON.stringify({
        Name,
        Year,
        MinPlayers,
        MaxPlayers,
        PlayTime,
        MinAge,
        UsersRated,
        RatingAverage,
        BGGRank,
        ComplexityAverage,
        OwnedUsers,
        CreatedDate,
        LastModifiedDate,
      })
    );
    fetch("https://localhost:55222/boardgames", {
      method: "POST",
      body: JSON.stringify({
        Name,
        Year,
        MinPlayers,
        MaxPlayers,
        PlayTime,
        MinAge,
        UsersRated,
        RatingAverage,
        BGGRank,
        ComplexityAverage,
        OwnedUsers,
        CreatedDate,
        LastModifiedDate,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).catch((error) => console.error("Error:", error));
  };
  return (
    <div>
      <label>
        Name:
        <input onBlur={(e) => setName(e.target.value)}></input>
      </label>
      <label>
        Year:
        <input onBlur={(e) => setYear(e.target.value)}></input>
      </label>
      <label>
        Min Players:
        <input onBlur={(e) => setMinPlayers(e.target.value)}></input>
      </label>
      <label>
        Max Players:
        <input onBlur={(e) => setMaxPlayers(e.target.value)}></input>
      </label>
      <label>
        Play Time:
        <input onBlur={(e) => setPlayTime(e.target.value)}></input>
      </label>
      <label>
        Min Age:
        <input onBlur={(e) => setMinAge(e.target.value)}></input>
      </label>
      <label>
        Users rated:
        <input onBlur={(e) => setUsersRated(e.target.value)}></input>
      </label>
      <label>
        Rating avr:
        <input onBlur={(e) => setRatingAverage(e.target.value)}></input>
      </label>
      <label>
        BGGRank
        <input onBlur={(e) => setBGGRank(e.target.value)}></input>
      </label>
      <label>
        Complexity avrg:
        <input onBlur={(e) => setComplexityAverage(e.target.value)}></input>
      </label>
      <label>
        Owned users:
        <input onBlur={(e) => setOwnedUsers(e.target.value)}></input>
      </label>
      <label>
        Created date:
        <input onBlur={(e) => setCreatedDate(e.target.value)}></input>
      </label>
      <label>
        last modified date:
        <input onBlur={(e) => setLastModifiedDate(e.target.value)}></input>
      </label>
      <button onClick={addnew}>Submit</button>
    </div>
  );
}
export default BoardGames;
