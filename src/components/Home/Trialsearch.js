import React from 'react';

const data = [
  {
    "Name of the Work": "Abhinavacintāmaṇiḥ",
    "Nature of Work": "Sanskrit text",
    "Source Text Details": "Mahāmati Bhagavāna Cakrapāṇidāsaṇkr̥ta Abhinavacintāmaṇiḥ transcribed from Oriya to Devanāgarī",
    "Nature of Work": "Edited",
    "Team": "Prem Kishore, Sudarshana Sharma and Madhava Candra",
    "Agency": "Central Council for Research in Ayurveda and Siddha, New Delhi",
    "Year of Publication": 1999
  },
  {
    "Name of the Work": "Abhinavacintāmaṇiḥ",
    "Nature of Work": "Sanskrit text with Hindi translation",
    "Source Text Details": "Mahāmati Bhagavāna Cakrapāṇidāsa kr̥ta Abhinavacintāmaṇiḥ, Part I and II",
    "Nature of Work": "Edited and Hindi translation",
    "Team": "Tārācanda Śarmā",
    "Agency": "Central Council for Research in Ayurveda and Siddha, New Delhi",
    "Year of Publication": 2009
  },
  {
    "Name of the Work": "Aṣṭāṅgasaṅgrahaḥ",
    "Nature of Work": "Sanskrit text with Sanskrit commentary – A Critical edition",
    "Source Text Details": "Aṣṭāṅgasaṅgrahaḥ - Induvyākhyāsahitaḥ, Sūtraśārīranidānasthānam, Bhāga – Prathama (Ka)",
    "Nature of Work": "Edited",
    "Team": "Vivekananda Pandey, Mahendrapal Simha Arya, Ayodhya Pandey, Sacchidananda Tiwari",
    "Agency": "Central Council for Research in Ayurveda and Siddha, New Delhi",
    "Year of Publication": 1991
  },
  {
    "Name of the Work": "Aṣṭāṅgasaṅgrahaḥ",
    "Nature of Work": "Sanskrit text with Sanskrit commentary – A Critical edition",
    "Source Text Details": "Aṣṭāṅgasaṅgrahaḥ - Induvyākhyāsahitaḥ, Uttarasthānam, Bhāga – 2",
    "Nature of Work": "Edited",
    "Team": "Vivekananda Pandey, Mahendrapal Simha Arya, K.D. Sharma, Ayodhya Pandey, Ganesh Kumar Shukla",
    "Agency": "Central Council for Research in Ayurveda and Siddha, New Delhi",
    "Year of Publication": 1988
  },
  {
    "Name of the Work": "Aṣṭāṅgasaṅgrahaḥ",
    "Nature of Work": "Sanskrit text with Sanskrit commentary – A Critical edition",
    "Source Text Details": "ṣṭāṅgasaṅgrahaḥ - Induvyākhyāsahitaḥ – Cikitsākalpasthānam, Bhāga – Prathama (kha)",
    "Nature of Work": "Edited",
    "Team": "Hemaraj Goyal, K.D. Sharma and Ayodhya Pandey",
    "Agency": "Central Council for Research in Ayurveda and Siddha, New Delhi",
    "Year of Publication": 1998
  },
  {
    "Name of the Work": "Cakradatta- Ratnaprabhā",
    "Nature of Work": "Sanskrit text",
    "Source Text Details": "Cakradatta – Ratnaprabhā, Residual Portion of the Manuscript, edited by Priyavrat Sharma, Bulletin of Indian Institute of History of Medicine, Special volume, Indian Institute of History of Medicine",
    "Nature of Work": "Edited",
    "Team": "Priyavrat Sharma",
    "Agency": "Indian Institute of History of Medicine, Central Council for Research in Indian Medicine & Homoeopathy, New Delhi",
    "Year of Publication": 2003
  },
  {
    "Name of the Work": "Cārucaryā",
    "Nature of Work": "Sanskrit text",
    "Source Text Details": "Cārucaryā by Bhoja Rāja (A Medieval work on Personal Hygiene)",
    "Nature of Work": "Edited",
    "Team": "B. Rama Rao",
    "Agency": "Indian Institute of History of Medicine, Central Council for Research in Indian Medicine & Homoeopathy, New Delhi",
    "Year of Publication": 1974
  },
  {
    "Name of the Work": "Cārucaryā",
    "Nature of Work": "Sanskrit text with Hindi translation",
    "Source Text Details": "Bhojarājakr̥ta Cārucaryā (Vaiyaktika svāstha vijñāna para madhyakālīna kr̥ti)",
    "Nature of Work": "Hindi translation",
    "Team": "Ganesh Shukla",
    "Agency": "Central Council for Research in Ayurveda and Siddha, New Delhi",
    "Year of Publication": 2000
  },
  {
    "Name of the Work": "Cikitsārṇava",
    "Nature of Work": "Sanskrit text with Hindi translation",
    "Source Text Details": "Mahāmahopādhyāyaviśvanāthaseṇakr̥taḥ - Cikitsārṇavaḥ, Pūrvārddhaḥ",
    "Nature of Work": "Hindi translation",
    "Team": "Madan Mohan Padhi and Sudarshan Das",
    "Agency": "Central Council for Research in Ayurveda and Siddha, New Delhi",
    "Year of Publication": 2009
  },
  {
    "Name of the Work": "Cikitsārṇava (Viśvanāthacikitsā)",
    "Nature of Work": "Sanskrit text with Hindi translation",
    "Source Text Details": "Mahāmahopādhyāyaviśvanāthaseṇakr̥taḥ - Cikitsārṇavaḥ (Viśvanāthacikitsā) Uttarārdhaḥ",
    "Nature of Work": "Hindi translation",
    "Team": "Madan Mohan Padhi and Sudarshan Das",
    "Agency": "Central Council for Research in Ayurveda and Siddha, New Delhi",
    "Year of Publication": 2010
  },
  {
    "Name of the Work": "Dhanvantarisāranidhiḥ",
    "Nature of Work": "Sanskrit text",
    "Source Text Details": "Dhanvantarisāranidhiḥ transcribed from Tamil to Devanāgarī",
    "Nature of Work": "Edited",
    "Team": "P. M. Padmanabha Sharma and T.V. Varadarajan",
    "Agency": "Central Council for Research in Ayurveda and Siddha, New Delhi",
    "Year of Publication": 1999
  },
  {
    "Name of the Work": "Nānāvidhavaidyam",
    "Nature of Work": "Sanskrit text",
    "Source Text Details": "Nānāvidhavaidyam",
    "Nature of Work": "Edited",
    "Team": "null",
    "Agency": "null",
    "Year of Publication": 1999
  },
  {
    "Name of the Work": "Netraprakāśikā",
    "Nature of Work": "Sanskrit text",
    "Source Text Details": "Netraprakāśikā transcribed from Tamil to Devanāgarī",
    "Nature of Work": "Edited",
    "Team": "P.M.P. Sharma and T.V. Varadarajan",
    "Agency": "null",
    "Year of Publication": 1999
  },
  {
    "Name of the Work": "Netraroganidānam",
    "Nature of Work": "Sanskrit text",
    "Source Text Details": "Netraroganidānam transcribed from Tamil to Devanāgarī",
    "Nature of Work": "Edited",
    "Team": "P.M.P. Sharma and T.V. Varadarajan",
    "Agency": "null",
    "Year of Publication": 1999
  },
  {
    "Name of the Work": "Pathyāpathya viniścayaḥ",
    "Nature of Work": "Sanskrit text with Hindi translation",
    "Source Text Details": "Mahāmahopādhyāya Viśvanātha Seṇa kr̥ta - Pathyāpathya viniścayaḥ",
    "Nature of Work": "Hindi translation",
    "Team": "Prem Kishore and M. M. Padhi",
    "Agency": "Central Council for Research in Ayurveda and Siddha",
    "Year of Publication": 1999
  },
  {
    "Name of the Work": "Bhelasaṁhitā",
    "Nature of Work": "Sanskrit text",
    "Source Text Details": "Bhela Samhitā (Maharṣipunarvasorātreyasyāntevāsinā Bhelācāryeṇa praṇītā)",
    "Nature of Work": "Edited",
    "Team": "V. S. V
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
