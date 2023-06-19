import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Navbar from '../../Home/userNavbar'

// Initialize Firebase
const firebaseConfig = {
  // Add your Firebase configuration here
  apiKey: "AIzaSyDXg6bof6EXM7TNfQjIQxYgKdR63SjURtE",
  authDomain: "amrri-cdeb4.firebaseapp.com",
  projectId: "amrri-cdeb4",
  storageBucket: "amrri-cdeb4.appspot.com",
  messagingSenderId: "739660662641",
  appId: "1:739660662641:web:5dc201b3c017dd80ccd8d0",
  measurementId: "G-0BT7XZRL7E"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const formsCollectionRef = db.collection("forms");

function Fourth() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const Userid = sessionStorage.getItem("uid");

  const [form4Data, setForm4Data] = useState({});
  const [form4Submitted, setForm4Submitted] = useState(
    localStorage.getItem('form4Submitted') === 'true'
  );
  useEffect(() => {
    const checkAndCreateDocument = async () => {
      if (form4Submitted) {
        localStorage.setItem('form4Submitted', 'true');
      }
    };

    checkAndCreateDocument();
  }, [form4Submitted]);
  const handleForm4Submit = async (e) => {
    e.preventDefault();
    setForm4Submitted(true);
    try {
      await formsCollectionRef.doc(Userid).update({
        form4: form4Data,
        docid:"ammri01"
      });
      alert("Form 4 submitted successfully!");
      console.log("Form 4 submitted successfully!");
      setForm4Data({}); // Reset form data
    } catch (error) {
      console.error("Error submitting Form 2:", error);
    }
  };

  const handleForm4InputChange = (e) => {
    setForm4Data({
      ...form4Data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <center>
      <Navbar/>
      <br />
      <br />
      <br />
      <br />
      
      <div className="text-center oneliner">
        <h1>Ayurveda Manuscripts Research Registry of India (AMRRI)</h1>
      </div>
      <center>
        <h2 className="font-bold">Type of Script</h2>
        <br />
       
        <center>
          <form onSubmit={handleForm4Submit} className="">
            <div className="flex flex-col justify-center w-[50%]">
              <center>
                <h2>Script</h2>
                <select
                  name="Script"
                  value={form4Data.Script}
                  onChange={handleForm4InputChange}
                  className="p-2 bg-blue-200 w-[100%]"
                  disabled={form4Submitted}

                >
                  <option value="Ahom Akhar">Ahom Akhar</option>
                  <option value="Jawi Akhar">Jawi Akhar</option>
                  <option value="Ahom">Ahom</option>
                  <option value="akhar Jawi">akhar Jawi</option>
                  <option value="Akhar Laon">Akhar Laon</option>
                  <option value="Akhar Rik">Akhar Rik</option>
                  <option value="Akhar Thrah">Akhar Thrah</option>
                  <option value="Akhar Tuer">Akhar Tuer</option>
                  <option value="Akhar Yok">Akhar Yok</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Archaic Meite">Archaic Meite</option>
                  <option value="Asamese">Asamese</option>
                  <option value="Batak">Batak</option>
                  <option value="Baudhi">Baudhi</option>
                  <option value="Bengali">Bengali</option>
                  <option value="BhattakSari">BhattakSari</option>
                  <option value="Bhujmur">Bhujmur</option>
                  <option value="Brahmi">Brahmi</option>
                  <option value="Chandavani">Chandavani</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Citralipi">Citralipi</option>
                  <option value="Devanagari">Devanagari</option>
                  <option value="Dhamma Khuen">Dhamma Khuen</option>
                  <option value="Dhamma Lanna">Dhamma Lanna</option>
                  <option value="Gaudi">Gaudi</option>
                  <option value="Gilgit">Gilgit</option>
                  <option value="Golmol">Golmol</option>
                  <option value="Grantha">Grantha</option>
                  <option value="Gujarati">Gujarati</option>
                  <option value="Gupta">Gupta</option>
                  <option value="Gurumukhi">Gurumukhi</option>
                  <option value="Halavi">Halavi</option>
                  <option value="Hinmol">Hinmol</option>
                  <option value="Indus">Indus</option>
                  <option value="Kadamba">Kadamba</option>
                  <option value="Kaithi">Kaithi</option>
                  <option value="Kalinga">Kalinga</option>
                  <option value="Kannada">Kannada</option>
                  <option value="Kashmiri">Kashmiri</option>
                  <option value="Kharosthi">Kharosthi</option>
                  <option value="Khmer">Khmer</option>
                  <option value="Khojki">Khojki</option>
                  <option value="Kirata">Kirata</option>
                  <option value="Kufic">Kufic</option>
                  <option value="Kunmol">Kunmol</option>
                  <option value="Kutalipi">Kutalipi</option>
                  <option value="Kwenmol">Kwenmol</option>
                  <option value="Landa">Landa</option>
                  <option value="Lepcha">Lepcha</option>
                  <option value="Lichavi">Lichavi</option>
                  <option value="Limbu">Limbu</option>
                  <option value="Litumol">Litumol</option>
                  <option value="Mahajani">Mahajani</option>
                  <option value="Malayalam">Malayalam</option>
                  <option value="Marathi">Marathi</option>
                  <option value="Meitei Mayek">Meitei Mayek</option>
                  <option value="Modi">Modi</option>
                  <option value="Nandinagari">Nandinagari</option>
                  <option value="Naskh">Naskh</option>
                  <option value="Nastaliq">Nastaliq</option>
                  <option value="Nepal Script(Prachalit)">
                    Nepal Script(Prachalit)
                  </option>
                  <option value="Newari">Newari</option>
                  <option value="Old Devnagari">Old Devnagari</option>
                  <option value="Old Kannada">Old Kannada</option>
                  <option value="Oriya">Oriya</option>
                  <option value="Pachumol">Pachumol</option>
                  <option value="Pahlavi">Pahlavi</option>
                  <option value="Pandavani">Pandavani</option>
                  <option value="Pashto">Pashto</option>
                  <option value="Pavachi">Pavachi</option>
                  <option value="Persian">Persian</option>
                  <option value="Phags-pa">Phags-pa</option>
                  <option value="Ranjana (Lantsa)">Ranjana (Lantsa)</option>
                  <option value="Redjung/Kaganga">Redjung/Kaganga</option>
                  <option value="Rekhta">Rekhta</option>
                  <option value="Sanchi">Sanchi</option>
                  <option value="Sharada">Sharada</option>
                  <option value="Shikasta">Shikasta</option>
                  <option value="Siddham">Siddham</option>
                  <option value="Siloti">Siloti</option>
                  <option value="Simhala">Simhala</option>
                  <option value="Sorang Sopeng">Sorang Sopeng</option>
                  <option value="Soyombo">Soyombo</option>
                  <option value="Takri">Takri</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Telugu">Telugu</option>
                  <option value="Thai">Thai</option>
                  <option value="Tibetan">Tibetan</option>
                  <option value="Tiglari">Tiglari</option>
                  <option value="Tirhuta/Mithilakshar">
                    Tirhuta/Mithilakshar
                  </option>
                  <option value="Varang Kshite">Varang Kshite</option>
                  <option value="Vartu">Vartu</option>
                  <option value="Vattaluttu">Vattaluttu</option>
                  <option value="Others">Others</option>
                </select>
                <br />
                <br />
                <h2>Language</h2>
                <select
                  name="Language"
                  value={form4Data.Language}
                  onChange={handleForm4InputChange}
                  className="p-2 bg-blue-200 w-[100%]"
              disabled={form4Submitted}

                >
                  <option value="Abhiri">Abhiri</option>
                  <option value="Agaria">Agaria</option>
                  <option value="Ahirani">Ahirani</option>
                  <option value="Aimol">Aimol</option>
                  <option value="Aiton">Aiton</option>
                  <option value="Anal">Anal</option>
                  <option value="Andamanese">Andamanese</option>
                  <option value="Angani">Angani</option>
                  <option value="Angika">Angika</option>
                  <option value="Apabhraṁśa">Apabhraṁśa</option>
                  <option value="Apatani">Apatani</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Archaic">Archaic</option>
                  <option value="Ardhamagadhi">Ardhamagadhi</option>
                  <option value="Armenian">Armenian</option>
                  <option value="Asamese">Asamese</option>
                  <option value="Ashing">Ashing</option>
                  <option value="Asuri">Asuri</option>
                  <option value="Avadhi">Avadhi</option>
                  <option value="Avantija">Avantija</option>
                  <option value="Badaga">Badaga</option>
                  <option value="Bagheli">Bagheli</option>
                  <option value="Baghelkhandi">Baghelkhandi</option>
                  <option value="Bagri">Bagri</option>
                  <option value="Bahiri">Bahiri</option>
                  <option value="Baigani">Baigani</option>
                  <option value="Bajania">Bajania</option>
                  <option value="Balti">Balti</option>
                  <option value="Bangni">Bangni</option>
                  <option value="Bangru">Bangru</option>
                  <option value="Bantu">Bantu</option>
                  <option value="Barari">Barari</option>
                  <option value="Basturia">Basturia</option>
                  <option value="Bauria">Bauria</option>
                  <option value="Bawm">Bawm</option>
                  <option value="Bengali">Bengali</option>
                  <option value="Bhanja-bhumia">Bhanja-bhumia</option>
                  <option value="Bharmauria">Bharmauria</option>
                  <option value="Bhili">Bhili</option>
                  <option value="Bhojapuri">Bhojapuri</option>
                  <option value="Bhotia">Bhotia</option>
                  <option value="Bhuiya">Bhuiya</option>
                  <option value="Biate">Biate</option>
                  <option value="Bichauli">Bichauli</option>
                  <option value="Bihari">Bihari</option>
                  <option value="Bilaspuri">Bilaspuri</option>
                  <option value="Birhor">Birhor</option>
                  <option value="Birjia">Birjia</option>
                  <option value="Bishnupuria">Bishnupuria</option>
                  <option value="Bodo">Bodo</option>
                  <option value="Bokar">Bokar</option>
                  <option value="Bondo">Bondo</option>
                  <option value="Bori">Bori</option>
                  <option value="Brahui">Brahui</option>
                  <option value="Brajabhasha">Brajabhasha</option>
                  <option value="Bugun">Bugun</option>
                  <option value="Bundeli">Bundeli</option>
                  <option value="Burmese">Burmese</option>
                  <option value="Bushari">Bushari</option>
                  <option value="Candali">Candali</option>
                  <option value="Chakhesang">Chakhesang</option>
                  <option value="Chakma">Chakma</option>
                  <option value="Cham">Cham</option>
                  <option value="Chambali">Chambali</option>
                  <option value="Chameali">Chameali</option>
                  <option value="Chang">Chang</option>
                  <option value="Changpa">Changpa</option>
                  <option value="Chattisgarhi">Chattisgarhi</option>
                  <option value="Chikari">Chikari</option>
                  <option value="Chinali">Chinali</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Chiru">Chiru</option>
                  <option value="Chitapavami">Chitapavami</option>
                  <option value="Chitrali">Chitrali</option>
                  <option value="Chote">Chote</option>
                  <option value="Churasi">Churasi</option>
                  <option value="Citpawani">Citpawani</option>
                  <option value="Daldi">Daldi</option>
                  <option value="Dalu">Dalu</option>
                  <option value="Darad">Darad</option>
                  <option value="Deori">Deori</option>
                  <option value="Desi">Desi</option>
                  <option value="Dhanki">Dhanki</option>
                  <option value="Dhimal">Dhimal</option>
                  <option value="Dhodia">Dhodia</option>
                  <option value="Dhundhari">Dhundhari</option>
                  <option value="Didayi">Didayi</option>
                  <option value="Dilahi">Dilahi</option>
                  <option value="Dimasa">Dimasa</option>
                  <option value="Dingal">Dingal</option>
                  <option value="Dogri">Dogri</option>
                  <option value="Dommari">Dommari</option>
                  <option value="Droskhat">Droskhat</option>
                  <option value="Duhlian-Twang">Duhlian-Twang</option>
                  <option value="Gadaba">Gadaba</option>
                  <option value="Gadiali">Gadiali</option>
                  <option value="Gallong">Gallong</option>
                  <option value="Gameti">Gameti</option>
                  <option value="Gamit">Gamit</option>
                  <option value="Gangte">Gangte</option>
                  <option value="Garasia">Garasia</option>
                  <option value="Garhwali">Garhwali</option>
                  <option value="Garo">Garo</option>
                  <option value="Giarahi">Giarahi</option>
                  <option value="Gondi">Gondi</option>
                  <option value="Gujarati">Gujarati</option>
                  <option value="Gujjari">Gujjari</option>
                  <option value="Gurkhali">Gurkhali</option>
                  <option value="Gurung">Gurung</option>
                  <option value="Gutob">Gutob</option>
                  <option value="Hajong">Hajong</option>
                  <option value="Halam">Halam</option>
                  <option value="Halbi">Halbi</option>
                  <option value="Harauti">Harauti</option>
                  <option value="Harayanavi">Harayanavi</option>
                  <option value="Hebrew">Hebrew</option>
                  <option value="Himachali">Himachali</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Hinduri">Hinduri</option>
                  <option value="Hindusthani">Hindusthani</option>
                  <option value="Hmar">Hmar</option>
                  <option value="Ho">Ho</option>
                  <option value="Hrusso">Hrusso</option>
                  <option value="Hualngo">Hualngo</option>
                  <option value="Irula">Irula</option>
                  <option value="Jabalpuri">Jabalpuri</option>
                  <option value="Jangali">Jangali</option>
                  <option value="Jatki">Jatki</option>
                  <option value="Jaunsari">Jaunsari</option>
                  <option value="Juang">Juang</option>
                  <option value="Kabui">Kabui</option>
                  <option value="Kacchi">Kacchi</option>
                  <option value="Kachanga">Kachanga</option>
                  <option value="Kachari">Kachari</option>
                  <option value="Kadar">Kadar</option>
                  <option value="Kagati">Kagati</option>
                  <option value="Kakbarak">Kakbarak</option>
                  <option value="Kanashi">Kanashi</option>
                  <option value="Kanauji">Kanauji</option>
                  <option value="Kangri">Kangri</option>
                  <option value="Kannada">Kannada</option>
                  <option value="Karbi">Karbi</option>
                  <option value="Karen">Karen</option>
                  <option value="Karko">Karko</option>
                  <option value="Kashmiri">Kashmiri</option>
                  <option value="Kathiawari">Kathiawari</option>
                  <option value="Khadiboli">Khadiboli</option>
                  <option value="Khaka">Khaka</option>
                  <option value="Khamba">Khamba</option>
                  <option value="Khampa">Khampa</option>
                  <option value="Khampti">Khampti</option>
                  <option value="Khampt-shan">Khampt-shan</option>
                  <option value="Khandesi">Khandesi</option>
                  <option value="Khanvar">Khanvar</option>
                  <option value="Kharar">Kharar</option>
                  <option value="Kharia">Kharia</option>
                  <option value="Kharoali">Kharoali</option>
                  <option value="Khasi">Khasi</option>
                  <option value="Khaskura">Khaskura</option>
                  <option value="Khatri">Khatri</option>
                  <option value="Kherwari">Kherwari</option>
                  <option value="Khiangan">Khiangan</option>
                  <option value="Khorusthi">Khorusthi</option>
                  <option value="Khotta">Khotta</option>
                  <option value="Kinnauri">Kinnauri</option>
                  <option value="Kiradi">Kiradi</option>
                  <option value="Kisan">Kisan</option>
                  <option value="Koch">Koch</option>
                  <option value="Kodagu">Kodagu</option>
                  <option value="Koi">Koi</option>
                  <option value="Koireng">Koireng</option>
                  <option value="Kokni">Kokni</option>
                  <option value="Kolami">Kolami</option>
                  <option value="Kolha">Kolha</option>
                  <option value="Kom">Kom</option>
                  <option value="Komkar">Komkar</option>
                  <option value="Konda">Konda</option>
                  <option value="Konicha">Konicha</option>
                  <option value="Konkani">Konkani</option>
                  <option value="Konyak">Konyak</option>
                  <option value="Koracha">Koracha</option>
                  <option value="Koraga">Koraga</option>
                  <option value="Korava">Korava</option>
                  <option value="Korku">Korku</option>
                  <option value="Korwa">Korwa</option>
                  <option value="Kota">Kota</option>
                  <option value="Kotwalia">Kotwalia</option>
                  <option value="Kudmali">Kudmali</option>
                  <option value="Kui">Kui</option>
                  <option value="Kuki">Kuki</option>
                  <option value="Kului">Kului</option>
                  <option value="Kumayuni">Kumayuni</option>
                  <option value="Kunbi">Kunbi</option>
                  <option value="Kurukh">Kurukh</option>
                  <option value="Kuvi">Kuvi</option>
                  <option value="Kyanthali">Kyanthali</option>
                  <option value="Ladakhi">Ladakhi</option>
                  <option value="Ladi">Ladi</option>
                  <option value="Lahanda">Lahanda</option>
                  <option value="Lahauli">Lahauli</option>
                  <option value="Lailawlh">Lailawlh</option>
                  <option value="Lakher">Lakher</option>
                  <option value="Lalung">Lalung</option>
                  <option value="Lambani">Lambani</option>
                  <option value="Lamgang">Lamgang</option>
                  <option value="Lanna">Lanna</option>
                  <option value="Laotian">Laotian</option>
                  <option value="Laria">Laria</option>
                  <option value="Lati">Lati</option>
                  <option value="Lepcha">Lepcha</option>
                  <option value="Limbu">Limbu</option>
                  <option value="Lisu">Lisu</option>
                  <option value="Lodha">Lodha</option>
                  <option value="Lotha">Lotha</option>
                  <option value="Lushai">Lushai</option>
                  <option value="Mag">Mag</option>
                  <option value="Magadhi">Magadhi</option>
                  <option value="Magahi">Magahi</option>
                  <option value="Magarkura">Magarkura</option>
                  <option value="Mahal">Mahal</option>
                  <option value="Maithili">Maithili</option>
                  <option value="Majhi">Majhi</option>
                  <option value="Makrani">Makrani</option>
                  <option value="Malankudi">Malankudi</option>
                  <option value="Malayalam">Malayalam</option>
                  <option value="Malhar">Malhar</option>
                  <option value="Malto">Malto</option>
                  <option value="Malvi">Malvi</option>
                  <option value="Manchat">Manchat</option>
                  <option value="Mandiali">Mandiali</option>
                  <option value="Mangari">Mangari</option>
                  <option value="Manipuri">Manipuri</option>
                  <option value="Mao">Mao</option>
                  <option value="Maram">Maram</option>
                  <option value="Marathi">Marathi</option>
                  <option value="Maria">Maria</option>
                  <option value="Maring">Maring</option>
                  <option value="Marugurjar">Marugurjar</option>
                  <option value="Marvadi">Marvadi</option>
                  <option value="Mavchi">Mavchi</option>
                  <option value="Meitei">Meitei</option>
                  <option value="Memba">Memba</option>
                  <option value="Mevari">Mevari</option>
                  <option value="Mewati">Mewati</option>
                  <option value="Milang">Milang</option>
                  <option value="Minyong">Minyong</option>
                  <option value="Miri">Miri</option>
                  <option value="Mishing">Mishing</option>
                  <option value="Mishmi">Mishmi</option>
                  <option value="Mizo">Mizo</option>
                  <option value="Monpa">Monpa</option>
                  <option value="Monsang">Monsang</option>
                  <option value="Moyon">Moyon</option>
                  <option value="Muduga">Muduga</option>
                  <option value="Multani">Multani</option>
                  <option value="Mundari">Mundari</option>
                  <option value="Naga">Naga</option>
                  <option value="Nagapuri">Nagapuri</option>
                  <option value="Nagari">Nagari</option>
                  <option value="Naikadi">Naikadi</option>
                  <option value="Naiki">Naiki</option>
                  <option value="Nati">Nati</option>
                  <option value="Nepali">Nepali</option>
                  <option value="Nicobarese">Nicobarese</option>
                  <option value="Nimari">Nimari</option>
                  <option value="Nishi">Nishi</option>
                  <option value="Nocte">Nocte</option>
                  <option value="Not Available">Not Available</option>
                  <option value="Odki">Odki</option>
                  <option value="Old Vietnamese (Han Nom)">
                    Old Vietnamese (Han Nom)
                  </option>
                  <option value="Onge">Onge</option>
                  <option value="Oriya">Oriya</option>
                  <option value="Padam">Padam</option>
                  <option value="Pahari">Pahari</option>
                  <option value="Pahlavi">Pahlavi</option>
                  <option value="Paisachi">Paisachi</option>
                  <option value="Paite">Paite</option>
                  <option value="Pali">Pali</option>
                  <option value="Palilibo">Palilibo</option>
                  <option value="Pamiri">Pamiri</option>
                  <option value="Panchpargania">Panchpargania</option>
                  <option value="Pang">Pang</option>
                  <option value="Pangi">Pangi</option>
                  <option value="Pangvali">Pangvali</option>
                  <option value="Parimu">Parimu</option>
                  <option value="Parji">Parji</option>
                  <option value="Parvatiya">Parvatiya</option>
                  <option value="Paschima">Paschima</option>
                  <option value="Pasi">Pasi</option>
                  <option value="Pasto">Pasto</option>
                  <option value="Pavri">Pavri</option>
                  <option value="Pengo">Pengo</option>
                  <option value="Persian">Persian</option>
                  <option value="Phom">Phom</option>
                  <option value="Pochuri">Pochuri</option>
                  <option value="Pracya">Pracya</option>
                  <option value="Prakrit">Prakrit</option>
                  <option value="Punchi">Punchi</option>
                  <option value="Punjabi">Punjabi</option>
                  <option value="Rai">Rai</option>
                  <option value="Rajasthani">Rajasthani</option>
                  <option value="Rajmahali">Rajmahali</option>
                  <option value="Ralte">Ralte</option>
                  <option value="Ramo">Ramo</option>
                  <option value="Rathi">Rathi</option>
                  <option value="Rengma">Rengma</option>
                  <option value="Riang">Riang</option>
                  <option value="Sabari">Sabari</option>
                  <option value="Sacari">Sacari</option>
                  <option value="Sadra">Sadra</option>
                  <option value="Sadri">Sadri</option>
                  <option value="Sajalong">Sajalong</option>
                  <option value="Sambalpuri">Sambalpuri</option>
                  <option value="Sangtam">Sangtam</option>
                  <option value="Sansi">Sansi</option>
                  <option value="Sanskrit">Sanskrit</option>
                  <option value="Santhali">Santhali</option>
                  <option value="Saraji">Saraji</option>
                  <option value="Sarhodi">Sarhodi</option>
                  <option value="Sauraseni">Sauraseni</option>
                  <option value="Saurashtri">Saurashtri</option>
                  <option value="Sema">Sema</option>
                  <option value="Sentinelese">Sentinelese</option>
                  <option value="Shekhavati">Shekhavati</option>
                  <option value="Sherdukpen">Sherdukpen</option>
                  <option value="Sherpa">Sherpa</option>
                  <option value="Shimong">Shimong</option>
                  <option value="Shina">Shina</option>
                  <option value="Shompen">Shompen</option>
                  <option value="Sikligar">Sikligar</option>
                  <option value="Simhalese">Simhalese</option>
                  <option value="Sindhi">Sindhi</option>
                  <option value="Singpo">Singpo</option>
                  <option value="Siraiki">Siraiki</option>
                  <option value="Sirmauri">Sirmauri</option>
                  <option value="Soliga">Soliga</option>
                  <option value="Sulung">Sulung</option>
                  <option value="Surajpuri">Surajpuri</option>
                  <option value="Tagin">Tagin</option>
                  <option value="Tai">Tai</option>
                  <option value="Tai Khuen">Tai Khuen</option>
                  <option value="Tai Yuan">Tai Yuan</option>
                  <option value="Tamang">Tamang</option>
                  <option value="Tamil">Tamil</option>
                  <option value="Tangkhul">Tangkhul</option>
                  <option value="Tangsa">Tangsa</option>
                  <option value="Tataotrong">Tataotrong</option>
                  <option value="Telugu">Telugu</option>
                  <option value="Thado">Thado</option>
                  <option value="Thar">Thar</option>
                  <option value="Thareli">Thareli</option>
                  <option value="Tharu">Tharu</option>
                  <option value="Tibetan">Tibetan</option>
                  <option value="Toda">Toda</option>
                  <option value="Toto">Toto</option>
                  <option value="Tulu">Tulu</option>
                  <option value="Tumbuka">Tumbuka</option>
                  <option value="Ucci">Ucci</option>
                  <option value="Udraja">Udraja</option>
                  <option value="Urdu">Urdu</option>
                  <option value="Vagri">Vagri</option>
                  <option value="Vaiphei">Vaiphei</option>
                  <option value="Vancho">Vancho</option>
                  <option value="Vanecari">Vanecari</option>
                  <option value="Varli">Varli</option>
                  <option value="Yereva">Yereva</option>
                  <option value="Yerukula">Yerukula</option>
                  <option value="Yimchungre">Yimchungre</option>
                  <option value="Zakring(Meyer)">Zakring(Meyer)</option>
                  <option value="Zeliang">Zeliang</option>
                  <option value="Zou">Zou</option>
                </select>

                <br />
                <br />
                <h2>Material</h2>

                <select
                  name="Material"
                  value={form4Data.Material}
                  onChange={handleForm4InputChange}
                  className="p-2 bg-blue-200 w-[100%]"
              disabled={form4Submitted}

                >
                  <option value="Animal Products">Animal Products</option>
                  <option value="Bamboo leaf/बांस का पत्ता">
                    Bamboo leaf/बांस का पत्ता
                  </option>
                  <option value="Banana leaf/कदली पत्र">
                    Banana leaf/कदली पत्र
                  </option>
                  <option value="Birch bark/भोज पत्र">
                    Birch bark/भोज पत्र
                  </option>
                  <option value="Clay Tablet /मृत्पट्टिका">
                    Clay Tablet /मृत्पट्टिका
                  </option>
                  <option value="Copper plate/ताम्र पत्र">
                    Copper plate/ताम्र पत्र
                  </option>
                  <option value="Deer Horn/मृग (हिरण) सींग">
                    Deer Horn/मृग (हिरण) सींग
                  </option>
                  <option value="Deer Skin/मृग (हिरण) चर्म">
                    Deer Skin/मृग (हिरण) चर्म
                  </option>
                  <option value="Earthenware">Earthenware</option>
                  <option value="Gold plate/स्वर्ण पत्र">
                    Gold plate/स्वर्ण पत्र
                  </option>
                  <option value="Iron plate /लौह">Iron plate /लौह</option>
                  <option value="Ivory/हाथी दाँत का बना हुआ">
                    Ivory/हाथी दाँत का बना हुआ
                  </option>
                  <option value="Leather/चर्म">Leather/चर्म</option>
                  <option value="Metal Sheets">Metal Sheets</option>
                  <option value="Palm leaf/ताड़ पत्र">
                    Palm leaf/ताड़ पत्र
                  </option>
                  <option value="Paper/कागज">Paper/कागज</option>
                  <option value="Parchment/चर्म पत्र">
                    Parchment/चर्म पत्र
                  </option>
                  <option value="Plant Products">Plant Products</option>
                  <option value="Sanchi (Tula) pat/सांचीपट">
                    Sanchi (Tula) pat/सांचीपट
                  </option>
                  <option value="Silk/ रेशमी वस्त्र">Silk/ रेशमी वस्त्र</option>
                  <option value="Silver plate/रजत पत्र">
                    Silver plate/रजत पत्र
                  </option>
                  <option value="Textile/ cotton/सूती वस्त्र">
                    Textile/ cotton/सूती वस्त्र
                  </option>
                </select>

                <h2>Condition of MSS</h2>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="MSS_condition"
                    value="Acidic"
                    checked={form4Data.MSS_condition === "Acidic"}
                    onChange={handleForm4InputChange}
              disabled={form4Submitted}

                  />
                  <span className="ml-2">Acidic</span>
                </label>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="MSS_condition"
                    value="Bad"
                    checked={form4Data.MSS_condition === "Bad"}
                    onChange={handleForm4InputChange}
              disabled={form4Submitted}

                  />
                  <span className="ml-2">Bad</span>
                </label>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="MSS_condition"
                    value="Binding Loss"
                    checked={form4Data.MSS_condition === "Binding Loss"}
                    onChange={handleForm4InputChange}
              disabled={form4Submitted}

                  />
                  <span className="ml-2">Binding Loss</span>
                </label>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="MSS_condition"
                    value="Brittle"
                    checked={form4Data.MSS_condition === "Brittle"}
                    onChange={handleForm4InputChange}
              disabled={form4Submitted}

                  />
                  <span className="ml-2">Brittle</span>
                </label>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="MSS_condition"
                    value="Broken"
                    checked={form4Data.MSS_condition === "Broken"}
                    onChange={handleForm4InputChange}
              disabled={form4Submitted}

                  />
                  <span className="ml-2">Broken</span>
                </label>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="MSS_condition"
                    value="Fungal Infected"
                    checked={form4Data.MSS_condition === "Fungal Infected"}
                    onChange={handleForm4InputChange}
              disabled={form4Submitted}

                  />
                  <span className="ml-2">Fungal Infected</span>
                </label>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="MSS_condition"
                    value="Good"
                    checked={form4Data.MSS_condition === "Good"}
                    onChange={handleForm4InputChange}
              disabled={form4Submitted}

                  />
                  <span className="ml-2">Good</span>
                </label>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="MSS_condition"
                    value="Ink Loosed"
                    checked={form4Data.MSS_condition === "Ink Loosed"}
                    onChange={handleForm4InputChange}
              disabled={form4Submitted}

                  />
                  <span className="ml-2">Ink Loosed</span>
                </label>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="MSS_condition"
                    value="Stained"
                    checked={form4Data.MSS_condition === "Stained"}
                    onChange={handleForm4InputChange}
              disabled={form4Submitted}

                  />
                  <span className="ml-2">Stained</span>
                </label>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="MSS_condition"
                    value="Stuck"
                    checked={form4Data.MSS_condition === "Stuck"}
                    onChange={handleForm4InputChange}
              disabled={form4Submitted}

                  />
                  <span className="ml-2">Stuck</span>
                </label>
                <label className="flex items-center p-2">
                  <input
                    type="radio"
                    name="MSS_condition"
                    value="worm_eaten"
                    checked={form4Data.MSS_condition === "worm_eaten"}
                    onChange={handleForm4InputChange}
              disabled={form4Submitted}

                  />
                  <span className="ml-2">Broken</span>
                </label>
              </center>
            </div>

            <br />
            <br />
            <div className="flex flex-col justify-center">
              <center>
                <h2>Historical Data</h2>

                <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                  Year in MSS:
                  <input
                    type="text"
                    name="MSS_Year"
                    value={form4Data.MSS_Year || ""}
                    onChange={handleForm4InputChange}
                    // className="m-4 bg-blue-400"
              disabled={form4Submitted}

                  />
                </label>
                <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                  Date data :
                  <input
                    type="text"
                    name="data_data"
                    value={form4Data.data_data || ""}
                    onChange={handleForm4InputChange}
              disabled={form4Submitted}

                    // className="m-4 bg-blue-400"
                  />
                </label>
                <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                  Place of Writing :
                  <input
                    type="text"
                    name="place_of_writing"
                    value={form4Data.place_of_writing || ""}
                    onChange={handleForm4InputChange}
              disabled={form4Submitted}

                    // className="m-4 bg-blue-400"
                  />
                </label>
                <br />
                <br />
                <h2>Manuscript Date SAMVAT</h2>
                <br />
                <select
                  name="Date_Samvat"
                  value={form4Data.Date_Samvat}
                  onChange={handleForm4InputChange}
                  className="p-2 bg-blue-200 w-[50%]"
              disabled={form4Submitted}

                >
                  <option value="Bangali (बंगाली) san">
                    Bangali (बंगाली) san
                  </option>
                  <option value="Caitradi Vikram (विक्रम) samvat">
                    Caitradi Vikram (विक्रम) samvat
                  </option>
                  <option value="Chalukya (चालुक्य) Vikram samvat">
                    Chalukya (चालुक्य) Vikram samvat
                  </option>
                  <option value="Dakshini Phasali (दक्षिणी फसली) san">
                    Dakshini Phasali (दक्षिणी फसली) san
                  </option>
                  <option value="Gangeya (गंगेय) samvat">
                    Gangeya (गंगेय) samvat
                  </option>
                  <option value="Gupta (गुप्त) samvat">
                    Gupta (गुप्त) samvat
                  </option>
                  <option value="Harsha (हर्ष) samvat">
                    Harsha (हर्ष) samvat
                  </option>
                  <option value="Hizari (हिजरी) san">Hizari (हिजरी) san</option>
                  <option value="Ilahi (इलाही) san">Ilahi (इलाही) san</option>
                  <option value="Kalichuri (कलिचुरी) samvat">
                    Kalichuri (कलिचुरी) samvat
                  </option>
                  <option value="Kaliyuga (कलियुग) samvat">
                    Kaliyuga (कलियुग) samvat
                  </option>
                  <option value="Kollam (कोल्लम) samvat">
                    Kollam (कोल्लम) samvat
                  </option>
                  <option value="Lakshmana Sena (लक्ष्मणसेन) samvat">
                    Lakshmana Sena (लक्ष्मणसेन) samvat
                  </option>
                  <option value="Magi (मागी) san">Magi (मागी) san</option>
                  <option value="Maurya (मौर्य) samvat">
                    Maurya (मौर्य) samvat
                  </option>
                  <option value="Newar (नेवार) samvat">
                    Newar (नेवार) samvat
                  </option>
                  <option value="Not Available">Not Available</option>
                  <option value="Rajyabhisheka (राज्याभिषेक) samvat">
                    Rajyabhisheka (राज्याभिषेक) samvat
                  </option>
                  <option value="Shahur (सहुर) san">Shahur (सहुर) san</option>
                  <option value="Shaka (शक) samvat">Shaka (शक) samvat</option>
                  <option value="Uttari Phasali (उत्तरी फसली) san">
                     Uttari Phasali (उत्तरी फसली) san
                  </option>
                  <option value="Not Available">Not Available</option>
                </select>
                <br />
                <br />
                <h2>MANUSCRIPT DATE: CHRISTIAN ERA</h2>
                <br />
                <select
                  name="Manu_date_christian"
                  value={form4Data.Manu_date_christian}
                  onChange={handleForm4InputChange}
                  className="p-2 bg-blue-200 w-[50%]"
              disabled={form4Submitted}

                >
                  <option value="10 (Tenth/10th/दसवीं/10वीं)">
                    10 (Tenth/10th/दसवीं/10वीं)
                  </option>
                  <option value="11 (Eleventh/11th/ग्यारहवीं/11वीं)">
                    11 (Eleventh/11th/ग्यारहवीं/11वीं)
                  </option>
                  <option value="12 (Twelvth/12th/बारहवीं/12वीं)">
                    12 (Twelvth/12th/बारहवीं/12वीं)
                  </option>
                  <option value="13 (Thirteenth/13th/तेरहवीं /13वीं)">
                    13 (Thirteenth/13th/तेरहवीं /13वीं)
                  </option>
                  <option value="14 (Fourteenth/14th/चौदहवीं/14वीं)">
                    14 (Fourteenth/14th/चौदहवीं/14वीं)
                  </option>
                  <option value="15 (Fifteenth /15th/पन्द्रहवीं/15वीं)">
                    15 (Fifteenth /15th/पन्द्रहवीं/15वीं)
                  </option>
                  <option value="16 (Sixteenth/16th/सोलहवीं/16वीं)">
                    16 (Sixteenth/16th/सोलहवीं/16वीं)
                  </option>
                  <option value="17 (Seventeenth/17th/सत्रहवीं/17वीं)">
                    17 (Seventeenth/17th/सत्रहवीं/17वीं)
                  </option>
                  <option value="18 (Eighteenth/18th/अठारहवीं/18वीं)">
                    18 (Eighteenth/18th/अठारहवीं/18वीं)
                  </option>
                  <option value="19 (Nineteenth/19th/उन्नीसवीं/19वीं)">
                    19 (Nineteenth/19th/उन्नीसवीं/19वीं)
                  </option>
                  <option value="1 (First/1st /पहली/1ली)">
                    1 (First/1st /पहली/1ली)
                  </option>
                  <option value="20 (Twentieth/20th/बीसवीं/20वीं)">
                    20 (Twentieth/20th/बीसवीं/20वीं)
                  </option>
                  <option value="2 (Second/2nd/ दूसरी/2री)">
                    2 (Second/2nd/ दूसरी/2री)
                  </option>
                  <option value="3 (Third/3rd/ तीसरी/3री)">
                    3 (Third/3rd/ तीसरी/3री)
                  </option>
                  <option value="4 (Fourth/4th /चौथी/4थी)">
                    4 (Fourth/4th /चौथी/4थी)
                  </option>
                  <option value="5 (Fifth /5th/ पाँचवीं/ 5वीं)">
                    5 (Fifth /5th/ पाँचवीं/ 5वीं)
                  </option>
                  <option value="6 (Sixth /6th/छठी/6ठी)">
                    6 (Sixth /6th/छठी/6ठी)
                  </option>
                  <option value="7 (Seventh/7th/सातवीं/7वीं)">
                    7 (Seventh/7th/सातवीं/7वीं)
                  </option>
                  <option value="8 (Eighth/8th/आठवीं/8वीं)">
                    8 (Eighth/8th/आठवीं/8वीं)
                  </option>
                  <option value="9 (Nineth/9th/नौवीं/9वीं)">
                    9 (Nineth/9th/नौवीं/9वीं)
                  </option>
                  <option value="Not available">Not available</option>
                </select>
                <br />
                <br />
                <br />
                <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                  STATE & UNION TERRITORIES :
                  <input
                    type="text"
                    name="states_union"
                    value={form4Data.states_union || ""}
                    onChange={handleForm4InputChange}
              disabled={form4Submitted}

                    // className="m-4 bg-blue-400"
                  />
                </label>
                <label className="flex flex-col p-2 bg-blue-200 w-[50%] font-bold">
                  CITY/VILLAGE :
                  <input
                    type="text"
                    name="city_village"
                    value={form4Data.city_village || ""}
                    onChange={handleForm4InputChange}
              disabled={form4Submitted}

                    // className="m-4 bg-blue-400"
                  />
                </label>

                <br />
                <br />
                <h2>Source of Manuscripts</h2>
                <br />
                <select
                  name="manu_source"
                  value={form4Data.manu_source || ""}
                  onChange={handleForm4InputChange}
                  className="w-[50%] bg-blue-200 p-3"
              disabled={form4Submitted}

                >
                  <option value="">Source of Manuscript</option>
                  <option value="Academy of Snskrit Research, Melkote">
                    Academy of Snskrit Research, Melkote
                  </option>
                  <option value="Akhila Bharatiya Sanskrit Parishad">
                    Akhila Bharatiya Sanskrit Parishad
                  </option>
                  <option value="Aklank Shodh Sansthan, Kota">
                    Aklank Shodh Sansthan, Kota
                  </option>
                  <option value="Allama Iqbal Library, University of Kashmir, Hazratbal, Srinagar, J&K">
                    Allama Iqbal Library, University of Kashmir, Hazratbal,
                    Srinagar, J&K
                  </option>
                  <option value="Amrita Vishwa Vidyapeetham University, Amritapuri, Kollam,Kerala">
                    Amrita Vishwa Vidyapeetham University, Amritapuri,
                    Kollam,Kerala
                  </option>
                  <option value="Anandashram Sanstha, Erandwane ,Pune, Maharashtra">
                    Anandashram Sanstha, Erandwane ,Pune, Maharashtra
                  </option>
                  <option value="A.P. Govt. Oriental Manuscripts Library and Research Institute,Hyderabad">
                    A.P. Govt. Oriental Manuscripts Library and Research
                    Institute,Hyderabad
                  </option>
                  <option value="Arunachal University,Itanagar">
                    Arunachal University,Itanagar
                  </option>
                  <option value="Asom Kalaguri Kistri Mandir Bodha Samaj Meragarh(MPC)">
                    Asom Kalaguri Kistri Mandir Bodha Samaj Meragarh(MPC)
                  </option>
                  <option value="Bhagwan Library, Survey">
                    Bhagwan Library, Survey
                  </option>
                  <option value="Bhai Vir Singh Sahitya Sadan, Gole Market, New Delhi">
                    Bhai Vir Singh Sahitya Sadan, Gole Market, New Delhi
                  </option>
                  <option value="Bhandarkar Oriental Research Institute, Pune">
                    Bhandarkar Oriental Research Institute, Pune
                  </option>
                  <option value="Bhogilal Leherchand Research Institute Of Indology,Delhi">
                    Bhogilal Leherchand Research Institute Of Indology,Delhi
                  </option>
                  <option value="Central Institute of Buddhist Studies, Leh">
                    Central Institute of Buddhist Studies, Leh
                  </option>
                  <option value="Central Institute Of Higher Tibetan Studies,Sarnath">
                    Central Institute Of Higher Tibetan Studies,Sarnath
                  </option>
                  <option value="Chaudhary Charan Singh University, Meerut, Uttar Pradesh">
                    Chaudhary Charan Singh University, Meerut, Uttar Pradesh
                  </option>
                  <option value="Chinmaya International Foundations Veliyanad, Ernakulam">
                    Chinmaya International Foundations Veliyanad, Ernakulam
                  </option>
                  <option value="Chinmaya International Foundations,Kerala (Survey)">
                    Chinmaya International Foundations,Kerala (Survey)
                  </option>
                  <option value="Click Institute, Tonk">
                    Click Institute, Tonk
                  </option>
                  <option value="CPR Institute of Indological Research(MPC), Alwarpet, Chennai">
                    CPR Institute of Indological Research(MPC), Alwarpet,
                    Chennai
                  </option>
                  <option value="Cultural Affairs &amp; Heritage Department, (Govt. of Sikkim)">
                    Cultural Affairs &amp; Heritage Department, (Govt. of
                    Sikkim)
                  </option>
                  <option value="Dakhinpat Asharami Satra">
                    Dakhinpat Asharami Satra
                  </option>
                  <option value="Department of Historical &amp; Antiquarian Studies">
                    Department of Historical &amp; Antiquarian Studies
                  </option>
                  <option value="Department of Tamil Literature,Chennai">
                    Department of Tamil Literature,Chennai
                  </option>
                  <option value="Department of Urdu, University of Mumbai">
                    Department of Urdu, University of Mumbai
                  </option>
                  <option value="Dept of Archives, J &amp; K State Govt., Srinagar">
                    Dept of Archives, J &amp; K State Govt., Srinagar
                  </option>
                  <option value="Dept. of Nyaya Philosophy, Rashtriya Sanskrit Vidyapeetha">
                    Dept. of Nyaya Philosophy, Rashtriya Sanskrit Vidyapeetha
                  </option>
                  <option value="Dept. of Persian, University of Kashmir">
                    Dept. of Persian, University of Kashmir
                  </option>
                  <option value="Dev Kumar Jain Oriental Research Institute, Arrah, Bihar">
                    Dev Kumar Jain Oriental Research Institute, Arrah, Bihar
                  </option>
                  <option value="Directorate of State Archaeology, Srinagar">
                    Directorate of State Archaeology, Srinagar
                  </option>
                  <option value="Dravidian University, Chittoor, AP">
                    Dravidian University, Chittoor, AP
                  </option>
                  <option value="Dr. Harisingh Gour University,Sagar">
                    Dr. Harisingh Gour University,Sagar
                  </option>
                  <option value="Dr. Syed Abdul Mohaimin Quadri Laoubali Institute for Management &amp; Conservation of Manuscripts">
                    Dr. Syed Abdul Mohaimin Quadri Laoubali Institute for
                    Management &amp; Conservation of Manuscripts
                  </option>
                  <option value="Forbes Gujarati Sabha, Juhu- MPC">
                    Forbes Gujarati Sabha, Juhu- MPC
                  </option>
                  <option value="French Institute of Pondicherry, Pondicherry">
                    French Institute of Pondicherry, Pondicherry
                  </option>
                  <option value="Govt. Oriental Manuscripts Library, Chennai">
                    Govt. Oriental Manuscripts Library, Chennai
                  </option>
                  <option value="Govt. Sanskrit College (MPC), Tripunithura">
                    Govt. Sanskrit College (MPC), Tripunithura
                  </option>
                  <option value="Gurucharan College,Silcher">
                    Gurucharan College,Silcher
                  </option>
                  <option value="Himachal Academy of Arts Culture and Languages">
                    Himachal Academy of Arts Culture and Languages
                  </option>
                  <option value="Himachal Academy of Arts,Culture And Languages,Shimla (Survey)">
                    Himachal Academy of Arts,Culture And Languages,Shimla
                    (Survey)
                  </option>
                  <option value="HMS Central Library, Jamia Hamdard (Hamdard University)">
                    HMS Central Library, Jamia Hamdard (Hamdard University)
                  </option>
                  <option value="IGNCA, Regional Centre, Varanasi">
                    IGNCA, Regional Centre, Varanasi
                  </option>
                  <option value="Indian Council for Cultural Relations, New Delhi">
                    Indian Council for Cultural Relations, New Delhi
                  </option>
                  <option value="Indira Gandhi National Centre for the Arts, New Delhi?">
                    Indira Gandhi National Centre for the Arts, New Delhi?
                  </option>
                  <option value="Institute For Oriental Studies(Shiva Shakti),Thane">
                    Institute For Oriental Studies(Shiva Shakti),Thane
                  </option>
                  <option value="Institute of Asian Studies, Sholinganallur, Chennai">
                    Institute of Asian Studies, Sholinganallur, Chennai
                  </option>
                  <option value="Institute of Rajasthan Studies (MPC)">
                    Institute of Rajasthan Studies (MPC)
                  </option>
                  <option value="Institute Of Tai Studies and Research, Moranhat">
                    Institute Of Tai Studies and Research, Moranhat
                  </option>
                  <option value="Intach, Lucknow(Survey)">
                    Intach, Lucknow(Survey)
                  </option>
                  <option value="Jain Data (Personal Collection)">
                    Jain Data (Personal Collection)
                  </option>
                  <option value="Jain Vishva Bharati Institute, Ladnun, Nagaur, Rajasthan">
                    Jain Vishva Bharati Institute, Ladnun, Nagaur, Rajasthan
                  </option>
                  <option value="Jammu And Kashmir Survey (Suresh Abroli)">
                    Jammu And Kashmir Survey (Suresh Abroli)
                  </option>
                  <option value="Jammu &amp; kashmir  Survey (Peerzada Ab. Bemyar)">
                    Jammu &amp; kashmir Survey (Peerzada Ab. Bemyar)
                  </option>
                  <option value="J.M.Seetharama">J.M.Seetharama</option>
                  <option value="Kameshwar Singh Darbhanga Sanskrit University, Darbhanga">
                    Kameshwar Singh Darbhanga Sanskrit University, Darbhanga
                  </option>
                  <option value="Kamrup Sanskrit Sanjivani Sabha, Nalbari, Assam">
                    Kamrup Sanskrit Sanjivani Sabha, Nalbari, Assam
                  </option>
                  <option value="Kannada University,Vidyaranya">
                    Kannada University,Vidyaranya
                  </option>
                  <option value="Kavikulaguru Kalidasa Sanskrit University,Ramtek">
                    Kavikulaguru Kalidasa Sanskrit University,Ramtek
                  </option>
                  <option value="Keladi Museum &amp;amp; Historical Research,Sagar Tq">
                    Keladi Museum &amp;amp; Historical Research,Sagar Tq
                  </option>
                  <option value="Khuda Baksh Oriental Public Library, Patna">
                    Khuda Baksh Oriental Public Library, Patna
                  </option>
                  <option value="K.K.Handique Govt. Sanskrit College, Guwahati,Assam">
                    K.K.Handique Govt. Sanskrit College, Guwahati,Assam
                  </option>
                  <option value="Krishnakanta Handiqui Library, Guwahati">
                    Krishnakanta Handiqui Library, Guwahati
                  </option>
                  <option value="Kundkund Jnanapitha, Indore, M.P">
                    Kundkund Jnanapitha, Indore, M.P
                  </option>
                  <option value="Kurukshetra University Library, Kurukshetra">
                    Kurukshetra University Library, Kurukshetra
                  </option>
                  <option value="Lakshman Pustakalaya">
                    Lakshman Pustakalaya
                  </option>
                  <option value="Lalbhai Dalpatbhai Institute of Indology, Ahmedabad">
                    Lalbhai Dalpatbhai Institute of Indology, Ahmedabad
                  </option>
                  <option value="Library of Tibetan Works and Archives, Dharamshala">
                    Library of Tibetan Works and Archives, Dharamshala
                  </option>
                  <option value="Lipika Manuscriptorium, Shantiniketan(MPC)">
                    Lipika Manuscriptorium, Shantiniketan(MPC)
                  </option>
                  <option value="Maansingh Lepcha(MPC)">
                    Maansingh Lepcha(MPC)
                  </option>
                  <option value="Mahabharat Samsodhan Mandal">
                    Mahabharat Samsodhan Mandal
                  </option>
                  <option value="Mahachulalongkornrajavidyalaya Chiang Mai Campus Thailand">
                    Mahachulalongkornrajavidyalaya Chiang Mai Campus Thailand
                  </option>
                  <option value="Maharajadhiraj Kameshwar Singh Institute of Social Sciences &amp; Research Library">
                    Maharajadhiraj Kameshwar Singh Institute of Social Sciences
                    &amp; Research Library
                  </option>
                  <option value="Majuli Collection">Majuli Collection</option>
                  <option value="Manipur State Archives, Imphal">
                    Manipur State Archives, Imphal
                  </option>
                  <option value="Manipur State Archives,Manipur (Survey)">
                    Manipur State Archives,Manipur (Survey)
                  </option>
                  <option value="Manuscript Library, Calicut University(MPC)">
                    Manuscript Library, Calicut University(MPC)
                  </option>
                  <option value="Maulana Abul Kalam Azad Arabic and Persian Research Institute,Tonk">
                    Maulana Abul Kalam Azad Arabic and Persian Research
                    Institute,Tonk
                  </option>
                  <option value="Mazhar Memorial Museum">
                    Mazhar Memorial Museum
                  </option>
                  <option value="Moolji Jaitha College, Jalgoan">
                    Moolji Jaitha College, Jalgoan
                  </option>
                  <option value="M.R.Sharma (Personal Deposite)">
                    M.R.Sharma (Personal Deposite)
                  </option>
                  <option value="Nakshatravedhashala Deva Prayaga">
                    Nakshatravedhashala Deva Prayaga
                  </option>
                  <option value="National Institute Of Prakrit Studies & Research, Shravanabelagola">
                    National Institute Of Prakrit Studies & Research,
                    Shravanabelagola
                  </option>
                  <option value="National Mission for Manuscripts">
                    National Mission for Manuscripts
                  </option>
                  <option value="Nava Nalanda Mahavihara">
                    Nava Nalanda Mahavihara
                  </option>
                  <option value="NIPSR, Sravanabelagola">
                    NIPSR, Sravanabelagola
                  </option>
                  <option value="NRLC">NRLC</option>
                  <option value="Oriental Institute, The Maharaja Sayajirao University, Baroda">
                    Oriental Institute, The Maharaja Sayajirao University,
                    Baroda
                  </option>
                  <option value="Oriental Research Institute and Manuscripts Library, Thiruvananthapuram">
                    Oriental Research Institute and Manuscripts Library,
                    Thiruvananthapuram
                  </option>
                  <option value="Oriental Research Institute, Mysore">
                    Oriental Research Institute, Mysore
                  </option>
                  <option value="Oriental Research Institute, Tirupati">
                    Oriental Research Institute, Tirupati
                  </option>
                  <option value="Orissa State Museum, Bhubaneswar">
                    Orissa State Museum, Bhubaneswar
                  </option>
                  <option value="Orissa State Museum,(Survey)">
                    Orissa State Museum,(Survey)
                  </option>
                  <option value="Patna Museum">Patna Museum</option>
                  <option value="P. G. Department of History, Sambalpur University">
                    P. G. Department of History, Sambalpur University
                  </option>
                  <option value="P. Jayaswal Research Institute, Nava Nalanda (Survey)">
                    P. Jayaswal Research Institute, Nava Nalanda (Survey)
                  </option>
                  <option value="Post Survey Rajasthan Studies">
                    Post Survey Rajasthan Studies
                  </option>
                  <option value="Purana Darbar">Purana Darbar</option>
                  <option value="Raastriya Sanskrita Sansthana (Manita Visvavidhayalaya)">
                    Raastriya Sanskrita Sansthana (Manita Visvavidhayalaya)
                  </option>
                  <option value="Rajakiya Pandulipi Pustakalaya,Allahapur">
                    Rajakiya Pandulipi Pustakalaya,Allahapur
                  </option>
                  <option value="Rajasthan Oriental Research Institute, Jodhpur">
                    Rajasthan Oriental Research Institute, Jodhpur
                  </option>
                  <option value="Rajasthan Sanskrit Academy, Jaipur">
                    Rajasthan Sanskrit Academy, Jaipur
                  </option>
                  <option value="Rampur Raza Library, Rampur">
                    Rampur Raza Library, Rampur
                  </option>
                  <option value="Rashtriya Sanskrit Sansthan, Allahabad">
                    Rashtriya Sanskrit Sansthan, Allahabad
                  </option>
                  <option value="Sampurnanand Sanskrit University (Sarasvati Bhavan)">
                    Sampurnanand Sanskrit University (Sarasvati Bhavan)
                  </option>
                  <option value="SARASVATI, Bhadrakh">
                    SARASVATI, Bhadrakh
                  </option>
                  <option value="Sarasvati Bhandar,Varanasi">
                    Sarasvati Bhandar,Varanasi
                  </option>
                  <option value="Satshrut Prabhavana Trust,Bhavanagar">
                    Satshrut Prabhavana Trust,Bhavanagar
                  </option>
                  <option value="Scindia Oriental Research Institute, Ujjain">
                    Scindia Oriental Research Institute, Ujjain
                  </option>
                  <option value="S.C.S.V.M.V(Deemed University)">
                    S.C.S.V.M.V(Deemed University)
                  </option>
                  <option value="Shahu Sanshodhan Kendra,Shivaji University Kolhapur. (MPC)">
                    Shahu Sanshodhan Kendra,Shivaji University Kolhapur. (MPC)
                  </option>
                  <option value="Shivaji University,Barr. Balasaheb Khardekar Library (S.M. Pujar)">
                    Shivaji University,Barr. Balasaheb Khardekar Library (S.M.
                    Pujar)
                  </option>
                  <option value="Śhri Jagannāth Sānskrit Vishvavidyalya">
                    Śhri Jagannāth Sānskrit Vishvavidyalya
                  </option>
                  <option value="Shri Pratap Singh (SPS) Library, Srinagar">
                    Shri Pratap Singh (SPS) Library, Srinagar
                  </option>
                  <option value="SLACJVMSS, Devprayag">
                    SLACJVMSS, Devprayag
                  </option>
                  <option value="Slarjung Museum Library, Hyderabad">
                    Slarjung Museum Library, Hyderabad
                  </option>
                  <option value="Smrithika Cultural and Charitable Trust">
                    Smrithika Cultural and Charitable Trust
                  </option>
                  <option value="S.R.C. Museum of Indology">
                    S.R.C. Museum of Indology
                  </option>
                  <option value="Sri Chandrashekharendra Saraswati Viswa Mahavidyalaya,Enathur">
                    Sri Chandrashekharendra Saraswati Viswa Mahavidyalaya,
                    Enathur
                  </option>
                  <option value="Sri Dev Kumar Jain Oriental Research Institute,Arrah">
                    Sri Dev Kumar Jain Oriental Research Institute, Arrah
                  </option>
                  <option value="Srimant Shankardeva Kalakhetra">
                    Srimant Shankardeva Kalakhetra
                  </option>
                  <option value="Sri Samartha Vagdevata Mandir (Domagaonmathasangrah )(MPC)">
                    Sri Samartha Vagdevata Mandir (Domagaonmathasangrah)(MPC)
                  </option>
                  <option value="Sri Vadiraj Research Foundation, Udupi">
                    Sri Vadiraj Research Foundation, Udupi
                  </option>
                  <option value="Sri Vedavyasa Samshodhana Kendram, Sri Subrahmanya Matha">
                    Sri Vedavyasa Samshodhana Kendram, Sri Subrahmanya Matha
                  </option>
                  <option value="SSES Research Centre, Chennai, MPC">
                    SSES Research Centre, Chennai, MPC
                  </option>
                  <option value="Sukritindra Oriental Research Institute (MPC)">
                    Sukritindra Oriental Research Institute (MPC)
                  </option>
                  <option value="Tamilnadu Survey">Tamilnadu Survey</option>
                  <option value="Tanjore Maharaja Serfoji's Saraswati Mahal Library, Thanjavur">
                    Tanjore Maharaja Serfoji's Saraswati Mahal Library,
                    Thanjavur
                  </option>
                  <option value="Telangana State Archives">
                    Telangana State Archives
                  </option>
                  <option value="The Asiatic Society">
                    The Asiatic Society
                  </option>
                  <option value="The Asiatic Society (survey)">
                    The Asiatic Society (survey)
                  </option>
                  <option value="Thunchan Memorial Trust, Tirur">
                    Thunchan Memorial Trust, Tirur
                  </option>
                  <option value="Tripura Basu (Personal Collection)">
                    Tripura Basu (Personal Collection)
                  </option>
                  <option value="University of Calcutta">
                    University of Calcutta
                  </option>
                  <option value="University of Social Sciences and Humanities, Viet Nam University, Ho Chi Minh, Vietnam">
                    University of Social Sciences and Humanities, Viet Nam
                    University, Ho Chi Minh, Vietnam
                  </option>
                  <option value="Uttar Pradesh PostSurvey">
                    Uttar Pradesh PostSurvey
                  </option>
                  <option value="Uttar Pradesh State Archives, Lucknow">
                    Uttar Pradesh State Archives, Lucknow
                  </option>
                  <option value="Uttar Pradesh Survey">
                    Uttar Pradesh Survey
                  </option>
                  <option value="Uttaranchal Sanskrit Academy, Haridwar">
                    Uttaranchal Sanskrit Academy, Haridwar
                  </option>
                  <option value="Vishveshvaranand Vishva Bandhu Institute of Sanskrit and Indological Studies, Hoshiarpur">
                    Vishveshvaranand Vishva Bandhu Institute of Sanskrit and
                    Indological Studies, Hoshiarpur
                  </option>
                  <option value="Vishwagurudeep Ashram Shodh Sansthan">
                    Vishwagurudeep Ashram Shodh Sansthan
                  </option>
                  <option value="Vrindavan Research Institute">
                    Vrindavan Research Institute
                  </option>
                  <option value="VVBIS, Hoshiarpur (Survey)">
                    VVBIS, Hoshiarpur (Survey)
                  </option>
                  <option value="Waqf Dargah Sayyad Salar Masood Ghazi(MPC)">
                    Waqf Dargah Sayyad Salar Masood Ghazi(MPC)
                  </option>
                  <option value="Yogi Vemana University,C.P.Brown Library, Kadapa">
                    Yogi Vemana University, C.P.Brown Library, Kadapa
                  </option>
                  <option value="Young Chakma Association">
                    Young Chakma Association
                  </option>
                  <option value="Others">Others (Please specify...)</option>
                </select>
                <br /><br />
                <label htmlFor="" className="p-2 bg-blue-200">
                Attach an authorization document from the Institute/ repository, where the MSS is collected.
                Files submitted:

                <input type="file" name="" id="" />
                </label>
                
              </center>
            </div>
            {/* Add more inputs as needed */}
            <br />
            <br />
            <br />
            
            <button type="submit bg-red-900"  disabled={form4Submitted} >Submit</button>
            <br />
            <br />
            <br />
          </form>
        </center>
      </center>
    </center>
  );
}

export default Fourth;
