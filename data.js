// data.js - teacher list and master timetable (moved out of index.html)
// This file must be loaded BEFORE the main script in index.html.

const teacherGroups = {
    "Mrs. Poonam Dullar": { subject: 'PRT' },
    "Mrs. Rekha": { subject: 'PRT' },
    "Mrs. Laxmi Devi": { subject: 'PRT' },
    "Mr. Sunil": { subject: 'PRT' },
    "Mr. Umesh": { subject: 'PRT' },
    "Mr. Sombir": { subject: 'PRT' },
    "Ms. Manju": { subject: 'PRT' },
    "Mr. Hardeep Saharan": { subject: 'PRT' },
    "Mr. Sumit": { subject: 'PRT' },
    "Mr. Sumit Sharma": { subject: 'PRT' },
    "Mrs Kiran Bala": { subject: 'PRT' },
    "Mrs. Pooja": { subject: 'Balvatika Teacher' },
    "Mrs PoonamBW-3": { subject: 'Balvatika Teacher' },
    "Ms. Mohini": { subject: 'Counsellor' },
    "Mr. Seva Singh": { subject: 'PGT English' },
    "Mr. Ghanshyam": { subject: 'PGT Hindi' },
    "Mr. Sukhvir": { subject: 'PGT Physics' },
    "Mrs. Neelam Rani": { subject: 'PGT Chemistry' },
    "Mr. Kuldeep": { subject: 'PGT Computer Science' },
    "Mr. Mukesh Kumar": { subject: 'PGT Maths' },
    "Mrs. Jyoti Yadav": { subject: 'PGT Biology' },
    "Sh. Sahil": { subject: 'PGT History' },
    "Sh. Gurmeet": { subject: 'PGT Geography' },
    "Sh. Sandeep": { subject: 'TGT Hindi' },
    "Mrs. Sangeeta": { subject: 'TGT Sanskrit' },
    "Mrs. Ranju": { subject: 'TGT Science' },
    "Mr. Dharam Singh": { subject: 'TGT Maths' },
    "Mrs. Madhu Bala": { subject: 'TGT English' },
    "Mr. Prateek": { subject: 'P.H.&E.' },
    "Sh. Narender": { subject: 'Yoga Instructor' },
    "Mr. Nagesh": { subject: 'TGT WET' },
    "Mr. Rajkumar": { subject: 'TGT Art' },
    "Sh. Manoj": { subject: 'Computer Instructor' },
    "Mrs. Suman": { subject: 'Music' },
    "Mrs. Nidhi": { subject: 'Librarian' },
    "Sh. Swatanter Singh": { subject: 'PGT Economics' },
    "Sh. Rakesh": { subject: 'TGT Maths' },
    "Principal Sir": { subject: 'Principal' }
};

const embeddedMasterTimetableCSV = `
Day,Teacher,P1,P2,P3,P4,P5,P6,P7,P8
Monday,Teacher,,,,,,,,
Monday,T1,,,,,,,,
Monday,Mrs Kiran Bala,IB,IB,IA,,IA,,IB,IB
Monday,Mrs. Poonam Dullar,IA,IA,,IB,IB,IB,,IA
Monday,Mrs. Rekha,II A,,II A,IIA,II A,,IIB,IIB
Monday,Mrs. Laxmi Devi,IIB,IIB,,IIB,IIB,,IIA,IIA
Monday,Mr. Sunil,IIIA,IIA,,IIIB,VB,,,VA
Monday,Mr. Hardeep Saharan,IVB,,IVA,IVB,IVB,,,
Monday,Mr. Sumit,VA,,,VB,,VB,,IIIB
Monday,Ms. Manju,IIIB,IIIB,IVB,,IVA,,IA,IIIA
Monday,Mr. Umesh,,IIIA,IIIB,IA,IIIB,IIIB,,IVA
Monday,Mr Sombir,VB,VA,IIB,IIIA,,VA,,
Monday,Mr. Sumit Sharma,IVA,,VB,VA,VA,IVA,IVB,IVB
Monday,Mr. Seva Singh,VII B,XII,,,XI ART,XI ART,XI SC,XI SC
Monday,Mr. Ghanshyam,,IX,"XI A,B",XII,,,X,X
Monday,Mr. Sukhvir,XII,,,,XI SC,,VIII B,VIII A
Monday,Mrs. Neelam Rani,XI SC,,XII,,VII B,,VII A,
Monday,Mr. Kuldeep,,,XI SC,XII,,X,,IX
Monday,Mr. Mukesh Kumar,,XI SC,,X,XII,XII,XII,XII
Monday,Mrs. Jyoti Yadav,VI B,XI SC,VI A,,XII,XII,XII,XII
Monday,Sh Sahil,XI ART,,VII A,,,VIIB,,
Monday,Sh Gurmeet,IX,X,VIII B,XI ART,,VIII A,,
Monday,Sh Sandeep,VII A,,,VIII A,VIII B,,VI B,VII B
Monday,Mrs Sangeeta,VIII A SKT,VI A SKT,,,VI B SKT,,VI A SKT,VII A SKT
Monday,Mrs Ranju,X,,IX,VII B,,IX,IX,
Monday,Mr. Dharam Singh,,,VI B,IX,VI A,VI B,,
Monday,Mrs. Madhu Bala,VIII B,VI B,X,,IX,VI A,VIII A,
Monday,Mr Prateek,,,,XI Sc,VIIA,XI Sc,XI Art,XI Art
Monday,Sh Narender,,IVA/IVB,,,,IIA/IIB,IIIA/IIIB,
Monday,Mr Nagesh,,VIII A,VII B,VI A,,VIII B,,
Monday,Mr Rajkumar,,,IIIA,,,IVB,IVA,VB
Monday,Sh Manoj,,VII B,IB,VIIIB,,VII A,VB,VI A
Monday,Mrs. Suman,,VB,VA,IVA,,IA,VIII A,
Monday,Mrs Nidhi,,VIII B,,VII A,IIIA,IIIA,VA,VI B
Monday,Sh Swatanter Singh,VI A,XI ART,,VI B,X,,,
Monday,Sh Rakesh,,VIIA,VIIIA,,,,VIIB,VIIIB
Monday,Mrs. Pooja,,,,,,,,
Monday,Mrs. PoonamBW-3,,,,,,,,
Monday,Principal Sir,,,IX,,,,,
Monday,Ms. Mohini,,,,,,,,
Tuesday,Teacher,,,,,,,,
Tuesday,T1,,,,,,,,
Tuesday,Mrs Kiran Bala,IB,,,IA,,IB,IA,IB
Tuesday,Mrs. Poonam Dullar,IA,IA,IA,IB,,IA,IB,
Tuesday,Mrs. Rekha,II A,,II A,IIA,II A,IIB,,IIB
Tuesday,Mrs. Laxmi Devi,IIB,,IIB,IIB,IIB,IIA,,IIA
Tuesday,Mr. Sunil,IIIA,,IIIA,IIIB,VB,VA,VA,
Tuesday,Mr. Hardeep Saharan,IVB,IVA,,,IVB,IVA,,IVA
Tuesday,Mr. Sumit,VA,VA,IIIB,VB,,VB,IIIB,IA
Tuesday,Ms. Manju,IIIB,IVB,,IVB,IVA,,,IIIA
Tuesday,Mr. Umesh,,VB,,IVA,IIIB,,IIIA,IIIB
Tuesday,Mr Sombir,VB,IIIA,IB,,VA,,VB,
Tuesday,Mr. Sumit Sharma,IVA,IB,VB,VA,,,IVB,
Tuesday,Mr. Seva Singh,VII B,XII,VII A,XI SC,XI ART,,,
Tuesday,Mr. Ghanshyam,,IX,"XI A,B",XII,X,XII,XII,XII
Tuesday,Mr. Sukhvir,XII,,,,XI SC,,VIII B,VIII A
Tuesday,Mrs. Neelam Rani,XI SC,,XII,,,,VII A,
Tuesday,Mr. Kuldeep,,,XI SC,XII,,XII,XII,XII
Tuesday,Mr. Mukesh Kumar,,XI SC,,X,XII,XI SC,XI SC,XI SC
Tuesday,Mrs. Jyoti Yadav,VI B,XI SC,VI A,,XII,XI SC,XI SC,XI SC
Tuesday,Sh Sahil,XI ART,X,,,VII A,VIIB,,
Tuesday,Sh Gurmeet,IX,,VIII B,XI ART,,VIII A,,
Tuesday,Sh Sandeep,,VI A,,VII A,VIII A,VIII B,VI B,VII B
Tuesday,Mrs Sangeeta,VIII A SKT,,,,VIII B SKT,,,VII A SKT
Tuesday,Mrs Ranju,X,,IX,VII B,,X,X,X
Tuesday,Mr. Dharam Singh,,,,IX,VI A,VI B,IX,
Tuesday,Mrs. Madhu Bala,VIII B,VI B,X,VIII A,IX,IX,,
Tuesday,Mr Prateek,,,,,VIB,VIA,,IX
Tuesday,Sh Narender,,IIA/IIB,IVA/IVB,,IA/IB,IIIA/IIIB,IIA/IIB,VA/VB
Tuesday,Mr Nagesh,,VIII A,VII B,VI B,,VII A,,VIII B
Tuesday,Mr Rajkumar,,VII A,VA,,IIIA,IVB,IVA,VI B
Tuesday,Sh Manoj,,IIIB,,VI A,,,VIII A,IVB
Tuesday,Mrs. Suman,,VII B,,IIIA,,,,VI A
Tuesday,Mrs Nidhi,,VIII B,,,VII B,,VI A,
Tuesday,Sh Swatanter Singh,VI A,XI ART,VI B,,,XI ART,XI ART,XI ART
Tuesday,Sh Rakesh,VIIA,,VIIIA,VIIIB,,,VIIB,
Tuesday,Mrs. Pooja,,,,,,,,
Tuesday,Mrs. PoonamBW-3,,,,,,,,
Tuesday,Principal Sir,,,IX,,,,,
Tuesday,Ms. Mohini,,,,,,,,
Wednesday,Teacher,,,,,,,,
Wednesday,T1,,,,,,,,
Wednesday,Mrs Kiran Bala,IB,IB,,IA,IA,,IB,IB
Wednesday,Mrs. Poonam Dullar,IA,IA,,IB,IB,,IA,IA
Wednesday,Mrs. Rekha,II A,II A,,IIA,II A,,IIB,IIB
Wednesday,Mrs. Laxmi Devi,IIB,IIB,,IIB,,IIB,IIA,IIA
Wednesday,Mr. Sunil,IIIA,VB,VA,IIIB,,,VA,IIIB
Wednesday,Mr. Hardeep Saharan,IVB,,IVB,,,IB,IVA,IVB
Wednesday,Mr. Sumit,VA,,,VB,VA,IA,IIIB,
Wednesday,Ms. Manju,IIIB,,,,IVA,IVB,,IIIA
Wednesday,Mr. Umesh,,IIIB,IVA,IIIA,,IIIB,IIIA,
Wednesday,Mr Sombir,VB,VA,IIIA,,IIIA,VB,VB,
Wednesday,Mr. Sumit Sharma,IVA,,IB,VA,VB,,IVB,
Wednesday,Mr. Seva Singh,,XII,VII A,XI SC,XI ART,,,VII B
Wednesday,Mr. Ghanshyam,,IX,"XI A,B",XII,,X,,
Wednesday,Mr. Sukhvir,XII,,,,XI SC,,,
Wednesday,Mrs. Neelam Rani,XI SC,,XII,,,XII,XII,XII
Wednesday,Mr. Kuldeep,,,XI SC,XII,,XI SC,XI SC,XI SC
Wednesday,Mr. Mukesh Kumar,,XI SC,,X,XII,,,
Wednesday,Mrs. Jyoti Yadav,VI B,XI SC,VI A,,XII,,,
Wednesday,Sh Sahil,XI ART,X,,VIIB,VII A,IX,IX,IX
Wednesday,Sh Gurmeet,IX,,VIII B,XI ART,VIII A,XI ART,XI ART,XI ART
Wednesday,Sh Sandeep,VIII A,VII B,,VII A,VI A,,VI B,
Wednesday,Mrs Sangeeta,,VIII B SKT,,,,VII B SKT,,VIII B SKT
Wednesday,Mrs Ranju,X,,IX,,,VIII B,,VIII A
Wednesday,Mr. Dharam Singh,,,VIIB,IX,,VI B,VI A,
Wednesday,Mrs. Madhu Bala,VIII B,VI B,X,,IX,VI A,VIII A,
Wednesday,Mr Prateek,,VIA,,VIB,X,,VIIA,X
Wednesday,Sh Narender,,IVA/IVB,IIA/IIB,IVA/IVB,IIB,,,VA/VB
Wednesday,Mr Nagesh,VII B,VIII A,,VI A,VIII B,VII A,VII B,VI A
Wednesday,Mr Rajkumar,,,VB,,VII B,IIIA,X,IVA
Wednesday,Sh Manoj,,IIIA,IA,VIII A,VIB,VA,,
Wednesday,Mrs. Suman,,,IIIB,,IVB,IIA,,
Wednesday,Mrs Nidhi,,VII A,,,IIIB,IVA,,VI B
Wednesday,Sh Swatanter Singh,VI A,XI ART,VI B,,,,,
Wednesday,Sh Rakesh,VIIA,,VIIIA,VIIIB,,VIIIA,VIIIB,VIIA
Wednesday,Mrs. Pooja,,,,,,,,
Wednesday,Mrs. PoonamBW-3,,,,,,,,
Wednesday,Principal Sir,,,,,,,,
Wednesday,Ms. Mohini,,,,,,,,
Thursday,Teacher,,,,,,,,
Thursday,T1,,,,,,,,
Thursday,Mrs Kiran Bala,IB,IB,,IA,IA,,IB,IB
Thursday,Mrs. Poonam Dullar,IA,IA,,IB,IB,,IA,IA
Thursday,Mrs. Rekha,II A,II A,,IIA,IIA,,IIB,IIB
Thursday,Mrs. Laxmi Devi,IIB,IIB,,IIB,IIB,,IIA,IIA
Thursday,Mr. Sunil,IIIA,IIIB,,IIIB,IIIA,,,VB
Thursday,Mr. Hardeep Saharan,IVB,IVB,IVB,IVB,,IVA,IVA,IVA
Thursday,Mr. Sumit,VA,,IIA,VB,,IB,IIIB,
Thursday,Ms. Manju,IIIB,,IIIA,IVA,IVA,IVB,,
Thursday,Mr. Umesh,,IVA,IVA,IIIA,IIIB,IA,IIIA,
Thursday,Mr Sombir,VB,,VA,,VA,IIIA,,
Thursday,Mr. Sumit Sharma,IVA,,,VA,VB,,,IVB
Thursday,Mr. Seva Singh,,XII,VII A,XI SC,XI ART,,XII,XII
Thursday,Mr. Ghanshyam,,IX,"XI A,B",XII,X,"XI A,B","XI A,B","XI A,B"
Thursday,Mr. Sukhvir,XII,,,,XI SC,,,
Thursday,Mrs. Neelam Rani,XI SC,,XII,VII A,,VII B,,
Thursday,Mr. Kuldeep,,,XI SC,XII,,XI SC,XI SC,XI SC
Thursday,Mr. Mukesh Kumar,,XI SC,,X,XII,,,
Thursday,Mrs. Jyoti Yadav,VI B,XI SC,VI A,,XII,,,
Thursday,Sh Sahil,XI ART,,,VIIB,VII A,,,
Thursday,Sh Gurmeet,,X,VIII B,XI ART,,VIII A,,
Thursday,Sh Sandeep,,VI A,VI B,,,VIII B,VII A,VII B
Thursday,Mrs Sangeeta,VIII A SKT,,,,VII B SKT,IX,IX,IX
Thursday,Mrs Ranju,X,,IX,,VIII A,,,VII A
Thursday,Mr. Dharam Singh,,,VIIB,IX,,VI B,VI A,
Thursday,Mrs. Madhu Bala,,VI B,,VI A,IX,X,X,
Thursday,Mr Prateek,,,,VIII A,VIII B,XII,VIII A,X
Thursday,Sh Narender,VIIA/B,VA/VB,IA/IB,,VIA/B,IIA/IIB,VA/VB,IIIA/IIIB
Thursday,Mr Nagesh,,VII A,X,,,,VI B,VIII B
Thursday,Mr Rajkumar,VIII B,VIII A,IIIB,,,VA,VII B,VI A
Thursday,Sh Manoj,,IIIA,,VIIIB,,IIIB,,VA
Thursday,Mrs. Suman,,VIII B,IIB,,IVB,,,VI B
Thursday,Mrs Nidhi,VI A,VII B,VB,,,VB,IVB,VIII A
Thursday,Sh Swatanter Singh,IX,XI ART,,VI B,,VI A,,
Thursday,Sh Rakesh,,,VIIIA,,,VIIA,VIIIB,
Thursday,Mrs. Pooja,,,,,,,,
Thursday,Mrs. PoonamBW-3,,,,,,,,
Thursday,Principal Sir,X,,,,,,,
Thursday,Ms. Mohini,,,,,,,,
Friday,Teacher,,,,,,,,
Friday,T1,,,,,,,,
Friday,Mrs Kiran Bala,IB,IB,IB,IA,IA,IB,,IB
Friday,Mrs. Poonam Dullar,IA,IA,,IB,,,IA,IA
Friday,Mrs. Rekha,II A,,II A,IIA,IIA,,IIB,IIB
Friday,Mrs. Laxmi Devi,IIB,IIB,,IIB,IIB,,IIA,IIA
Friday,Mr. Sunil,IIIA,,IIIB,,VB,IIA,VA,VB
Friday,Mr. Hardeep Saharan,IVB,,,,IVB,IA,IVA,IVB
Friday,Mr. Sumit,VA,,IA,VB,,,IIIB,
Friday,Ms. Manju,IIIB,,IVB,IVA,IVA,IIIA,IVB,IIIA
Friday,Mr. Umesh,,IIIA,IVA,IIIA,,IIIB,IB,
Friday,Mr Sombir,VB,VA,VA,,VA,,IIIA,
Friday,Mr. Sumit Sharma,IVA,IIA,VB,VA,,IVB,,
Friday,Mr. Seva Singh,VII B,XII,VII A,XI SC,XI ART,,,
Friday,Mr. Ghanshyam,,,"XI A,B",XII,X,,IX,
Friday,Mr. Sukhvir,XII,,,,XI SC,XI SC,XI SC,XI SC
Friday,Mrs. Neelam Rani,XI SC,,XII,,,VII B,VII A,
Friday,Mr. Kuldeep,,IX,XI SC,XII,,XI ART,XI ART,XI ART
Friday,Mr. Mukesh Kumar,,XI SC,,X,XII,X,X,X
Friday,Mrs. Jyoti Yadav,,XI SC,,,XII,,VI B,VI A
Friday,Sh Sahil,XI ART,X,,VIIB,VII A,,,
Friday,Sh Gurmeet,,,VIII B,XI ART,,VIII A,,
Friday,Sh Sandeep,VIII A,VI A,,VII A,,VIII B,,VII B
Friday,Mrs Sangeeta,VI A SKT,,VI B SKT,,VII B SKT,,,VII A SKT
Friday,Mrs Ranju,X,VIII B,IX,,,IX,VIII B,VIII A
Friday,Mr. Dharam Singh,,,VIIB,IX,VI A,VI B,VI A,
Friday,Mrs. Madhu Bala,VIII B,VI B,X,,IX,VI A,VIII A,
Friday,Mr Prateek,,VII B,,,,XII,XII,XII
Friday,Sh Narender,,IVA/IVB,IIB,VIIIA/B,IIIA/IIIB,VA/VB,,
Friday,Mr Nagesh,,VII A,VI A,VI B,,,,IX
Friday,Mr Rajkumar,,VIII A,,,VIII B,,,VI B
Friday,Sh Manoj,VIB,IIIB,,IVB,,IIB,VB,IVA
Friday,Mrs. Suman,,VB,IIIA,IIIB,IB,VII A,,VA
Friday,Mrs Nidhi,,,,,VIII A,IVA,,IIIB
Friday,Sh Swatanter Singh,IX,XI ART,,VI A,VI B,,,
Friday,Sh Rakesh,VIIA,,VIIIA,,,,VIIB,VIIIB
Friday,Mrs. Pooja,,,,,,,,
Friday,Mrs. PoonamBW-3,,,,,,,,
Friday,Principal Sir,X,,,,,,,
Friday,Ms. Mohini,,,,,,,,
Saturday,Teacher,,,,,,,,
Saturday,T1,,,,,,,,
Saturday,Mrs Kiran Bala,IB,IB,,,,,IB,IB
Saturday,Mrs. Poonam Dullar,IA,IA,,IA,,,IA,IA
Saturday,Mrs. Rekha,II A,,,,II A,IIA,II A,II A
Saturday,Mrs. Laxmi Devi,IIB,,IIB,,IIB,,IIB,IIB
Saturday,Mr. Sunil,IIIA,VA,,IIIB,VB,,IIIA,IIIA
Saturday,Mr. Hardeep Saharan,IVB,IVA,IVB,IB,IVB,,IVB,IVB
Saturday,Mr. Sumit,VA,VB,IIA,IIB,IIIB,IA,VA,VA
Saturday,Ms. Manju,IIIB,IVB,,IVA,IIIA,,CLA III B,CLA III B
Saturday,Mr. Umesh,,IIIB,IIIA,IIIA,IVA,IB,,
Saturday,Mr Sombir,VB,IIIA,VA,VB,,IIB,CLA VB,CLA VB
Saturday,Mr. Sumit Sharma,IVA,,VB,IVB,VA,VB,CLA IV A,CLA IV A
Saturday,Mr. Seva Singh,VII B,XII,VII A,XI SC,XI ART,,,
Saturday,Mr. Ghanshyam,,IX,"XI A,B",XII,X,,,
Saturday,Mr. Sukhvir,XII,,,,XI SC,XII,XII,XII
Saturday,Mrs. Neelam Rani,XI SC,,XII,VII B,,XI SC,XI SC,XI SC
Saturday,Mr. Kuldeep,,,XI SC,XII,,X,,
Saturday,Mr. Mukesh Kumar,,XI SC,,X,XII,,,
Saturday,Mrs. Jyoti Yadav,VI B,XI SC,VI A,,XII,,CLA VI B,CLA VI B
Saturday,Sh Sahil,XI ART,VIIB,,,VII A,XI ART,XI ART,XI ART
Saturday,Sh Gurmeet,,X,VIII B,XI ART,,VIII A,,
Saturday,Sh Sandeep,VIII A,VI A,VI B,,,VIII B,CLA VII A,CLA VII A
Saturday,Mrs Sangeeta,,VI B SKT,,,,,CLA VIIIA,CLA VIIIA
Saturday,Mrs Ranju,X,VIII B,IX,,VIII A,VII A,,
Saturday,Mr. Dharam Singh,,,VIIB,VI B,VI A,IX,IX,IX
Saturday,Mrs. Madhu Bala,VIII B,,X,VIII A,IX,VI A,,
Saturday,Mr Prateek,,,,IX,VIII B,VII B,CLA VIII B,CLA VIII B
Saturday,Sh Narender,,IIA/IIB,IA/IB,IIA/B,IA/IB,IIIA/IIIB,,
Saturday,Mr Nagesh,,VIII A,,,,VI B,,CLA VIIB
Saturday,Mr Rajkumar,VI A,,IIIB,VII A,,VA,,
Saturday,Sh Manoj,,VIIA,,,VII B,IV A,,
Saturday,Mrs. Suman,,,IVA,,,,,
Saturday,Mrs Nidhi,,,,VA,,IVB,CLA VIIB,
Saturday,Sh Swatanter Singh,IX,XI ART,,VI A,VI B,,X,X
Saturday,Sh Rakesh,VIIA,,VIIIA,VIIIB,,,CLA VIA,CLA VIA
Saturday,Mrs. Pooja,,,,,,,,
Saturday,Mrs. PoonamBW-3,,,,,,,,
Saturday,Principal Sir,X,,,,,,,
Saturday,Ms. Mohini,,,,,,,,
`;
