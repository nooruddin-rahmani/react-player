import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Beaver Creek",
      cover: "./assets/covers/Sworn.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "./assets/songs/Daylight.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Daylight",
      cover: "./assets/covers/CanaryForest.jpg",
      artist: "Aiguille",
      audio: "./assets/songs/Reflection.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover: "./assets/covers/Sworn.jpg",
      artist: "Swørn",
      audio: "./assets/songs/Nightfall.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover: "./assets/covers/a.jpg",
      artist: "Aiguille",
      audio: "./assets/songs/Under the City Stars.mp3",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover: "./assets/covers/b.jpg",
      artist: "Swørn",
      audio: "./assets/songs/Keep Going.mp3",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover: "./assets/covers/Aiguillie.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "./assets/songs/Beaver Creek.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;