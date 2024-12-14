import React from 'react';

const data = [
  {
        "Name of the Work": "Abhinavacintāmaṇiḥ",
        "Nature of Work": "transcribed from Oriya to Devanāgarī",
        "source Text Details": "Mahāmati Bhagavāna Cakrapāṇidāsaṇkr̥ta Abhinavacintāmaṇiḥ",
        "Team": "Prem Kishore, Sudarshana Sharma and Madhava Candra",
        "Agency": "Central Council for Research in Ayurveda and Siddha, New Delhi",
        "Year of Publication": "1999",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Abhinavacintāmaṇiḥ",
        "Nature of Work": "Edited and Hindi translation",
        "source Text Details": "Mahāmati Bhagavāna Cakrapāṇidāsa kr̥ta Abhinavacintāmaṇiḥ, Part I and II",
        "Team": "Tārācanda Śarmā",
        "Agency": "Central Council for Research in Ayurveda and Siddha, New Delhi",
        "Year of Publication": "2009",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Aṣṭāṅgasaṅgrahaḥ",
        "Nature of Work": "Edited",
        "source Text Details": "Aṣṭāṅgasaṅgrahaḥ - Induvyākhyāsahitaḥ, Sūtraśārīranidānasthānam, Bhāga – Prathama (Ka)",
        "Team": "Vivekananda Pandey, Mahendrapal Simha Arya, Ayodhya Pandey, Sacchidananda Tiwari",
        "Agency": "Central Council for Research in Ayurveda and Siddha, New Delhi",
        "Year of Publication": "1991",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Aṣṭāṅgasaṅgrahaḥ",
        "Nature of Work": "Edited",
        "source Text Details": "Aṣṭāṅgasaṅgrahaḥ - Induvyākhyāsahitaḥ, Uttarasthānam, Bhāga – 2",
        "Team": "Vivekananda Pandey, Mahendrapal Simha Arya, K.D. Sharma, Ayodhya Pandey, Ganesh Kumar Shukla",
        "Agency": "Central Council for Research in Ayurveda and Siddha, New Delhi",
        "Year of Publication": "1988",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Aṣṭāṅgasaṅgrahaḥ",
        "Nature of Work": "Edited",
        "source Text Details": "ṣṭāṅgasaṅgrahaḥ - Induvyākhyāsahitaḥ – Cikitsākalpasthānam, Bhāga – Prathama (kha)",
        "Team": "Hemaraj Goyal, K.D. Sharma and Ayodhya Pandey",
        "Agency": "Central Council for Research in Ayurveda and Siddha, New Delhi",
        "Year of Publication": "1998",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Cakradatta- Ratnaprabhā",
        "Nature of Work": "Edited",
        "source Text Details": "Cakradatta – Ratnaprabhā, Residual Portion of the Manuscript, edited by Priyavrat Sharma, Bulletin of Indian Institute of History of Medicine, Special volume, Indian Institute of History of Medicine",
        "Team": "Priyavrat Sharma",
        "Agency": "Indian Institute of History of Medicine, Central Council for Research in Indian Medicine & Homoeopathy, New Delhi",
        "Year of Publication": "2003",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Cārucaryā",
        "Nature of Work": "Edited",
        "source Text Details": "Cārucaryā by Bhoja Rāja (A Medieval work on Personal Hygiene)",
        "Team": "B. Rama Rao",
        "Agency": "Indian Institute of History of Medicine, Central Council for Research in Indian Medicine & Homoeopathy, New Delhi",
        "Year of Publication": "1974",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Cārucaryā",
        "Nature of Work": "Hindi translation",
        "source Text Details": "Bhojarājakr̥ta Cārucaryā (Vaiyaktika svāstha vijñāna para madhyakālīna kr̥ti)",
        "Team": "Ganesh Shukla",
        "Agency": "Central Council for Research in Ayurveda and Siddha, New Delhi",
        "Year of Publication": "2000",
        "Addl Notes": "First edition",
        "": ""
    },
    {
        "Name of the Work": "Cikitsārṇava",
        "Nature of Work": "Hindi translation",
        "source Text Details": "Mahāmahopādhyāyaviśvanāthaseṇakr̥taḥ - Cikitsārṇavaḥ, Pūrvārddhaḥ",
        "Team": "Madan Mohan Padhi and Sudarshan Das",
        "Agency": "Central Council for Research in Ayurveda and Siddha, New Delhi",
        "Year of Publication": "2009",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Cikitsārṇava (Viśvanāthacikitsā)",
        "Nature of Work": "Hindi translation",
        "source Text Details": "Mahāmahopādhyāyaviśvanāthaseṇakr̥taḥ - Cikitsārṇavaḥ (Viśvanāthacikitsā) Uttarārdhaḥ",
        "Team": "Madan Mohan Padhi and Sudarshan Das",
        "Agency": "Central Council for Research in Ayurveda and Siddha, New Delhi",
        "Year of Publication": "2010",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Dhanvantarisāranidhiḥ",
        "Nature of Work": "transcribed from Tamil to Devanāgarī",
        "source Text Details": "Dhanvantarisāranidhiḥ",
        "Team": "P. M. Padmanabha Sharma and T.V. Varadarajan",
        "Agency": "Central Council for Research in Ayurveda and Siddha, New Delhi",
        "Year of Publication": "1999",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Nānāvidhavaidyam",
        "Nature of Work": "edited",
        "source Text Details": "Nānāvidhavaidyam",
        "Team": "",
        "Agency": "",
        "Year of Publication": "1999",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Netraprakāśikā",
        "Nature of Work": "transcribed from Tamil to Devanāgarī",
        "source Text Details": "Netraprakāśikā",
        "Team": "P.M.P. Sharma and T.V. Varadarajan",
        "Agency": "",
        "Year of Publication": "1999",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Netraroganidānam",
        "Nature of Work": "transcribed from Tamil to Devanāgarī",
        "source Text Details": "Netraroganidānam",
        "Team": "P.M.P. Sharma and T.V. Varadarajan",
        "Agency": "",
        "Year of Publication": "1999",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Pathyāpathya viniścayaḥ",
        "Nature of Work": "Hindi translation",
        "source Text Details": "Mahāmahopādhyāya Viśvanātha Seṇa kr̥ta - Pathyāpathya viniścayaḥ",
        "Team": "Prem Kishore and M. M. Padhi",
        "Agency": "Central Council for Research in Ayurveda and Siddha",
        "Year of Publication": "1999",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Bhelasaṁhitā",
        "Nature of Work": "Edited",
        "source Text Details": "Bhela Samhitā (Maharṣipunarvasorātreyasyāntevāsinā Bhelācāryeṇa praṇītā)",
        "Team": "V. S. Venkatasubramania Sastri and C. Raja Rajeswara Sarma",
        "Agency": "Central Council for Research in Indian Medicine & Homoeopathy, New Delhi",
        "Year of Publication": "1977",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Bheṣajakalpaḥ",
        "Nature of Work": "",
        "source Text Details": "Bhesaja Kalpaḥ (Bhāradvājapraṇītaḥ)",
        "Team": "V. S. Venkatasubramania Sastri and C. Raja Rajeshwara Sharma",
        "Agency": "Central Council for Research in Indian Medicine & Homoeopathy, New Delhi",
        "Year of Publication": "1977",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Rasamañjūṣā",
        "Nature of Work": "transcribed and translated into Hindi",
        "source Text Details": "Dvārakātripāṭhī viracita (loka bhāṣā) - Rasamañjūṣā",
        "Team": "Tārācanda Śarmā",
        "Agency": "Central Council for Research in Indian Medicine & Homoeopathy, New Delhi",
        "Year of Publication": "2005",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Rasapradīpikā",
        "Nature of Work": "",
        "source Text Details": "Vēdāntācāryapatra Muḍuṁba Vēṁkaṭācāryā viracita - Rasapradīpikā",
        "Team": "",
        "Agency": "Central Council For Research in Ayurveda & Siddha, New Delhi",
        "Year of Publication": "2001",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Śataślokī",
        "Nature of Work": "transcribed from Tamil to Dēvanāgarī",
        "source Text Details": "Avadhānasarasvatī viracitā - Śataślōkī",
        "Team": "M. P. Sharma and T.V. Varadarajan",
        "Agency": "Central Council for Research in Ayurveda & Siddha, New Delhi",
        "Year of Publication": "2001",
        "Addl Notes": "",
        "": ""
    },
    {
        "Name of the Work": "Śabdacandrikā",
        "Nature of Work": "Edited",
        "source Text Details": "Cakrapāṇidatta viracitā - Śabdacandrikā",
        "Team": "Priyavrat Sharma",
        "Agency": "Indian Institute of History of Medicine, Central Council for Research in Ayurveda & Siddha, New Delhi",
        "Year of Publication": "1989",
        "Addl Notes": "",
        "": ""
    }

];

function Trialsearch() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">AMRRI Completed Data</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Name of the Work</th>
              <th className="border border-gray-300 p-2">Nature of Work</th>
              <th className="border border-gray-300 p-2">Source Text Details</th>
              <th className="border border-gray-300 p-2">Nature of Work.1</th>
              <th className="border border-gray-300 p-2">Team</th>
              <th className="border border-gray-300 p-2">Agency</th>
              <th className="border border-gray-300 p-2">Year of Publication</th>
              <th className="border border-gray-300 p-2">Addl Notes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-100">
                <td className="border border-gray-300 p-2">{row["Name of the Work"]}</td>
                <td className="border border-gray-300 p-2">{row["Nature of Work"]}</td>
                <td className="border border-gray-300 p-2">{row["source Text Details"]}</td>
                <td className="border border-gray-300 p-2">{row["Nature of Work.1"]}</td>
                <td className="border border-gray-300 p-2">{row["Team"]}</td>
                <td className="border border-gray-300 p-2">{row["Agency"]}</td>
                <td className="border border-gray-300 p-2">{row["Year of Publication"]}</td>
                <td className="border border-gray-300 p-2">{row["Addl Notes"] || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Trialsearch;
