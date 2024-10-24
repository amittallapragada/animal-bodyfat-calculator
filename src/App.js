import React, { useState } from 'react';

// Animal data with body fat percentages
const animalData = [
  { animal: "crab", body_fat: 0.6, img: "https://pics.craiyon.com/2024-09-03/RdfuRx5YTV-mCncW016GcQ.webp"},
  { animal: "kangaroo", body_fat: 2, img: "https://img.craiyon.com/2024-10-24/J5_l2I4gTcuT7IrkUCGxvA.webp" },
  { animal: "stingray", body_fat: 3, img:"https://img.craiyon.com/2024-10-24/EpjyHTwcTgWaRoV0I6G9WQ.webp" },
  { animal: "cow", body_fat: 6, img: "https://img.craiyon.com/2024-10-24/Wa0iO8N5SYqkeJbzdIUwTg.webp" },
  { animal: "tiger", body_fat: 7, img: "https://media.craiyon.com/2024-09-12/ohGumFHLQI-BJ9slQ1BCnA.webp" },
  { animal: "rat", body_fat: 7.4, img: "https://pics.craiyon.com/2024-09-03/CEKX749TSne8xJbOhfWiyA.webp" },
  { animal: "wolf", body_fat: 9.7, img: "https://img.craiyon.com/2024-10-24/abdRUbOGSWS2AVFguih8dg.webp"},
  { animal: "african elephant", body_fat: 10, img: "https://img.craiyon.com/2024-10-24/Ai6bZ--AS26QT6LHezYdlg.webp"},
  { animal: "rhino", body_fat: 11, img: "https://img.craiyon.com/2024-10-24/bUVSTl0QQHOPUt_dQJjLYA.webp" },
  { animal: "hedgehog", body_fat: 12, img: "https://img.craiyon.com/2024-10-24/3kJZYOkISHmJMOlEuo2KEA.webp"  },
  { animal: "fox", body_fat: 12.7, img: "https://pics.craiyon.com/2024-09-02/8TKRz-K2SoGijdNXyHJU5Q.webp" },
  { animal: "lion", body_fat: 13, img: "https://pics.craiyon.com/2024-09-02/oZpa_aH4RG6GKJk-cl0NUQ.webp" },
  { animal: "goat", body_fat: 13.2, img: "https://pics.craiyon.com/2024-09-06/bbLa_X9-TLqcKIPVtVSpzg.webp" },
  { animal: "hyena", body_fat: 14, img: "https://img.craiyon.com/2024-10-24/ekjZZCFTTrmdjmZutKi01A.webp" },
  { animal: "scorpion", body_fat: 14.4, img: "https://pics.craiyon.com/2024-09-08/5jFF4JH8QTKmq-VnWMSkVA.webp" },
  { animal: "bull", body_fat: 14.9, img: "https://media.craiyon.com/2024-09-09/d2rlDs8hTuWOgg9RncZPRA.webp" },
  { animal: "cat", body_fat: 15, img: "https://img.craiyon.com/2024-10-24/hpLDKdYVSIWrBAbkS8mvSg.webp" },
  { animal: "hornet", body_fat: 16, img: "https://pics.craiyon.com/2024-09-15/j-BPnavAQHOGRFIpXwStlQ.webp" },
  { animal: "pig", body_fat: 16.6, img: "https://img.craiyon.com/2024-10-24/_Ni3VGxATmGwnNgqGqLq7Q.webp"},
  { animal: "chicken", body_fat: 17, img: "https://img.craiyon.com/2024-10-24/ou1GMRi3RDuXd29Tly9WjQ.webp"},
  { animal: "boar", body_fat: 17.2, img: "https://img.craiyon.com/2024-10-24/QKik62IrSrWjxcH9S759LQ.webp"},
  { animal: "gecko", body_fat: 18, img: "https://pics.craiyon.com/2024-09-06/5_MJPCbhSsOfQZX9KAjINg.webp" },
  { animal: "hippo", body_fat: 18.9, img: "https://pics.craiyon.com/2024-09-15/Y0LP_vkFR3eotnczi1xw4w.webp" },
  { animal: "turtle", body_fat: 19, img: "https://pics.craiyon.com/2024-09-05/l4OVaHSMRRay7q6BvWRy1w.webp" },
  { animal: "walrus", body_fat: 19.5, img: "https://img.craiyon.com/2024-10-24/Rhc5LjqhR0ilyRShB3DwXQ.webp" },
  { animal: "dog", body_fat: 20.7, img: "https://img.craiyon.com/2024-10-24/8VH-zG5_RCmXgpOoZZCxHw.webp"},
  { animal: "buffalo", body_fat: 21, img: "https://img.craiyon.com/2024-10-24/B8SE5DEXS6ev-GnYuVaOtg.webp" },
  { animal: "leopard", body_fat: 22, img: "https://img.craiyon.com/2024-10-24/NN-TxvyzQA6ox7OMb5XOaA.webp" },
  { animal: "snake", body_fat: 23, img: "https://img.craiyon.com/2024-10-24/E6b5gAYvQVSZwDlUpVMPHw.webp" },
  { animal: "sheep", body_fat: 25, img: "https://img.craiyon.com/2024-10-24/uT5icGh2S1WfEvTOvNc2aw.webp" },
  { animal: "penguin", body_fat: 30, img:"https://pics.craiyon.com/2024-09-19/lthWO-T3RkWbZ4HiYt9v8g.webp"},
  { animal: "gorilla", body_fat: 31, img: "https://img.craiyon.com/2024-10-24/KlP1pluuSnK5xR9BFpNV2Q.webp" },
  { animal: "pigeon", body_fat: 32, img: "https://img.craiyon.com/2024-10-24/rXgt9Dp_Qymz01l34o1dIQ.webp" },
  { animal: "mouse", body_fat: 33, img: "https://img.craiyon.com/2024-10-24/ooMh4UDPQFm6sOu_RJ9CTA.webp" },
  { animal: "black bear", body_fat: 35, img: "https://img.craiyon.com/2024-10-24/blg5So-CRaijvPvv4X-AwQ.webp" },
  { animal: "deer", body_fat: 36, img:"https://img.craiyon.com/2024-10-24/W9A6chdcS0uGm_DUS94HvQ.webp" },
  { animal: "seal", body_fat: 40, img:"https://img.craiyon.com/2024-10-24/MUMC9Xa2QO-yxQn80fMYww.webp" },
  { animal: "grizzly bear", body_fat: 41, img: "https://pics.craiyon.com/2024-09-08/NYn5gOvSRo-s2T_4-kFlfw.webp" },
  { animal: "north atlantic right whale", body_fat: 45, img:"https://img.craiyon.com/2024-10-24/qP0M6IHlTnGJj0JUT5FeoA.webp" },
  { animal: "cockroach", body_fat: 46, img: "https://img.craiyon.com/2024-10-24/Doat2ynnSf6dqqZmB4CanA.webp" },
  { animal: "narwhal", body_fat: 48, img: "https://img.craiyon.com/2024-10-24/n-7R9RNzQ-6suslwL2Vdig.webp" },
  { animal: "polar bear", body_fat: 49, img: "https://img.craiyon.com/2024-10-24/M6WXZvQoRM-r8-m4IK-ZUQ.webp" },
  { animal: "raccoon", body_fat: 50, img: "https://img.craiyon.com/2024-10-24/gsIuyIwqT8OFct9CDShRLg.webp" },
  { animal: "platypus", body_fat: 51, img: "https://img.craiyon.com/2024-10-24/a_ejEdEQSYGkIsW-1q4wUQ.webp" },
  { animal: "blue whale", body_fat: 53, img: "https://pics.craiyon.com/2024-09-24/Mjdcmbj2Qgew_DOEIQ3zvQ.webp" },
  { animal: "army cutworm moth", body_fat: 72, img: "https://pics.craiyon.com/2024-09-23/m0sGd0PrRMKN5FGHn1wIpQ.webp" }
];

function App() {
  const [bodyFat, setBodyFat] = useState('');
  const [match, setMatch] = useState(null);

  const findClosestMatch = () => {
    if (bodyFat === '') return;
    const userBodyFat = parseFloat(bodyFat);
    const closest = animalData.reduce((prev, curr) =>
      Math.abs(curr.body_fat - userBodyFat) < Math.abs(prev.body_fat - userBodyFat) ? curr : prev
    );
    setMatch(closest);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Find Your Spirit Animal... In Body Fat!</h1>
      <p style={styles.subtitle}>
        Ever wonder which animal shares your body fat percentage? Enter your info and we'll match you with your closest animal counterpart. Don't know your body fat percentage? Find it here: <a href="https://www.calculator.net/body-fat-calculator.html">Body Fat Calculator</a>
      </p>

      <input 
        type="number" 
        value={bodyFat} 
        onChange={(e) => setBodyFat(e.target.value)} 
        placeholder="Enter your body fat percentage" 
        style={styles.input}
      />
      <button onClick={findClosestMatch} style={styles.button}>Find My Match</button>
      <p>Note: data may not be fully accurate, <a href="https://pastebin.com/3c7bj884">source list</a> found through this <a href="https://www.youtube.com/watch?time_continue=12&v=Tjg97JOJyyw&embeds_referring_euri=https%3A%2F%2Fwww.perplexity.ai%2F&embeds_referring_origin=https%3A%2F%2Fwww.perplexity.ai&source_ve_path=Mjg2NjY">youtube video</a></p>

      {match && (
        <div style={styles.result}>
          <h2 style={styles.resultTitle}>Your closest match is the <b>{match.animal}</b></h2>
          <img style={styles.image} src={match.img} alt={match.animal} />
          <p style={styles.bodyFat}>Body Fat: {match.body_fat}%</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f8fc',
    padding: '0 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#1d1d1d',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    maxWidth: '800px',
    textAlign: 'center',
    color: '#4f4f4f',
  },
  input: {
    padding: '12px 20px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '300px',
    outline: 'none',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '12px 24px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  result: {
    marginTop: '40px',
    textAlign: 'center',
  },
  resultTitle: {
    fontSize: '1.8rem',
    marginBottom: '20px',
  },
  image: {
    width: '250px',
    height: '250px',
    borderRadius: '16px',
    marginBottom: '20px',
    objectFit: 'cover',
  },
  bodyFat: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
};

export default App;
