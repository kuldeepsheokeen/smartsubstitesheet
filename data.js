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
    "Sh. Sumit": { subject: 'PGT Economics' },
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
Monday,Mr. Seva Singh,VII B,,,,XII,XI ART,XI SC,
Monday,Mr. Ghanshyam,,,"XI A,B",XII,X,IX,,
Monday,Mr. Sukhvir,XII,XII,,,,XI SC,VIII B,VIII A
Monday,Mrs. Neelam Rani,XI SC,,XII,,,,VII A,XII
Monday,Mr. Kuldeep,,IX,XI SC,XII,,X,,XI ART
Monday,Mr. Mukesh Kumar,,XI SC,,X,XI SC,XII,XII,
Monday,Mrs. Jyoti Yadav,VI B,XI SC,VI A,,XI SC,XII,XII,
Monday,Sh Sahil,XI ART,,VII A,VIIB,,,,IX
Monday,Sh Gurmeet,IX,,VIII B,XI ART,,VIII A,X,
Monday,Sh Sandeep,VII A,,VI B,VIII A,VIII B,,,VII B
Monday,Mrs Sangeeta,VIII A SKT,VI A SKT,,,VI B SKT,,VI A SKT,VII A SKT
Monday,Mrs Ranju,X,,IX,,,VII B,IX,X
Monday,Mr. Dharam Singh,,,,IX,VI A,VI B,VI B,
Monday,Mrs. Madhu Bala,VIII B,VI B,X,,IX,VI A,VIII A,
Monday,Mr Prateek,,X,,XI SC,,VIIA,XI ART,
Monday,Sh Narender,,IVA/IVB,,,,IIA/IIB,IIIA/IIIB,
Monday,Mr Nagesh,,VIII A,VII B,VI A,VII B,VIII B,,
Monday,Mr Rajkumar,,,IIIA,VI B,,IVB,IVA,VB
Monday,Sh Manoj,,VII B,IB,VIIIB,VII A,,VB,VI A
Monday,Mrs. Suman,,VB,VA,IVA,VIII A,IA,,
Monday,Mrs Nidhi,,VIII B,,VII A,IIIA,IIIA,VA,XI SC
Monday,Sh Sumit,VI A,XI ART,,,XI ART,,,VI B
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
Tuesday,Mr. Seva Singh,VII B,,VII A,,XII,XI ART,XI SC,
Tuesday,Mr. Ghanshyam,,,,XII,X,,,"XI A,B"
Tuesday,Mr. Sukhvir,XII,XII,,,,XI SC,VIII B,VIII A
Tuesday,Mrs. Neelam Rani,XI SC,,XII,XI SC,XI SC,,VII A,
Tuesday,Mr. Kuldeep,,IX,,XII,,,X,XI SC
Tuesday,Mr. Mukesh Kumar,,XI SC,XI SC,,,XII,XII,X
Tuesday,Mrs. Jyoti Yadav,VI B,XI SC,XI SC,,VI A,XII,XII,
Tuesday,Sh Sahil,XI ART,X,,VIIB,VII A,,,
Tuesday,Sh Gurmeet,IX,,VIII B,XI ART,XI ART,VIII A,,
Tuesday,Sh Sandeep,,VI A,VI B,VII A,VIII A,VIII B,,VII B
Tuesday,Mrs Sangeeta,VIII A SKT,,,VI B SKT,VIII B SKT,,IX,VII A SKT
Tuesday,Mrs Ranju,X,,IX,,,VII B,,
Tuesday,Mr. Dharam Singh,,,,IX,,VI A,VI B,
Tuesday,Mrs. Madhu Bala,VIII B,VI B,X,,,,VIII A,IX
Tuesday,Mr Prateek,,,VIA,VIA,,VIB,XI ART,XII(YOGA)
Tuesday,Sh Narender,,IIA/IIB,IVA/IVB,,IA/IB,IIIA/IIIB,IIA/IIB,VA/VB
Tuesday,Mr Nagesh,,VIII A,VII B,,IX,VII A,,VIII B
Tuesday,Mr Rajkumar,,VII A,VA,X,IIIA,IVB,IVA,
Tuesday,Sh Manoj,,IIIB,,VIII A,VIB,,,IVB
Tuesday,Mrs. Suman,,VII B,,IIIA,,IX,,VI A
Tuesday,Mrs Nidhi,,VIII B,,,VII B,X,VI A,
Tuesday,Sh Sumit,VI A,XI ART,XI ART,,,,,VI B
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
Wednesday,Mr. Seva Singh,,VII B,VII A,XI SC,XII,XI ART,,
Wednesday,Mr. Ghanshyam,,,"XI A,B",XII,X,IX,,
Wednesday,Mr. Sukhvir,XII,XII,,,,XI SC,,
Wednesday,Mrs. Neelam Rani,,,XII,VII A,,VII B,XI SC,XI SC
Wednesday,Mr. Kuldeep,XI SC,,XI SC,XII,XI SC,,XII,XII
Wednesday,Mr. Mukesh Kumar,,XI SC,,X,,XII,,X
Wednesday,Mrs. Jyoti Yadav,VI B,XI SC,VI A,,,XII,,
Wednesday,Sh Sahil,XI ART,X,,VIIB,VII A,,XI ART,XI ART
Wednesday,Sh Gurmeet,IX,,VIII B,XI ART,XI ART,VIII A,X,
Wednesday,Sh Sandeep,VIII A,,,,VI A,,VI B,VII B
Wednesday,Mrs Sangeeta,,VIII B SKT,,,VII B SKT,,IX,VIII B SKT
Wednesday,Mrs Ranju,X,,IX,,,VIII B,,VIII A
Wednesday,Mr. Dharam Singh,,,VIIB,IX,,VI B,VI A,IX
Wednesday,Mrs. Madhu Bala,VIII B,VI B,X,,IX,VI A,VIII A,
Wednesday,Mr Prateek,,IX,,VIB,XI SC,X,VIIA,XII
Wednesday,Sh Narender,,IVA/IVB,IIA/IIB,IVA/IVB,IIB,,,VA/VB
Wednesday,Mr Nagesh,VII B,VIII A,,VI A,VIII B,VII A,,VI A
Wednesday,Mr Rajkumar,,VI A,VB,,,IIIA,VII B,IVA
Wednesday,Sh Manoj,,IIIA,IA,VIII A,VIB,VA,,
Wednesday,Mrs. Suman,,,IIIB,,IVB,IIA,,
Wednesday,Mrs Nidhi,,VII A,VI B,,IIIB,IVA,,
Wednesday,Sh Sumit,VI A,XI ART,,,,,,VI B
Wednesday,Sh Rakesh,VIIA,,VIIIA,VIIIB,VIIIA,,VIIIB,VIIA
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
Thursday,Mr. Seva Singh,,,VII A,,,XI ART,XI SC,XII
Thursday,Mr. Ghanshyam,,XII,"XI A,B",,X,IX,X,
Thursday,Mr. Sukhvir,XII,,,,XI SC,XI SC,,
Thursday,Mrs. Neelam Rani,XI SC,,XII,XII,,VII B,,
Thursday,Mr. Kuldeep,,XII,XI SC,XI SC,XI ART,,,XI SC
Thursday,Mr. Mukesh Kumar,,XI SC,,X,XII,,XII,
Thursday,Mrs. Jyoti Yadav,VI B,XI SC,VI A,,XII,,XII,
Thursday,Sh Sahil,,IX,,VIIB,VII A,,XI ART,XI ART
Thursday,Sh Gurmeet,XI ART,,VIII B,XI ART,,VIII A,,
Thursday,Sh Sandeep,,VI A,VI B,VII A,,VIII B,VII A,VII B
Thursday,Mrs Sangeeta,VIII A SKT,,,,VII B SKT,,,
Thursday,Mrs Ranju,X,,IX,,VIII A,,,VII A
Thursday,Mr. Dharam Singh,,,VIIB,IX,,VI B,,VI A
Thursday,Mrs. Madhu Bala,,VI B,X,,IX,VI A,VIII A,X
Thursday,Mr Prateek,,X YOGA,,VIII A,VIII B,XII,IX,XI SC
Thursday,Sh Narender,VIIA/B,VA/VB,IA/IB,,VIA/B,IIA/IIB,VA/VB,IIIA/IIIB
Thursday,Mr Nagesh,IX,VII A,,,,,VI B,VIII B
Thursday,Mr Rajkumar,VIII B,VIII A,IIIB,,,VA,VII B,IX
Thursday,Sh Manoj,,IIIA,,VIIIB,,IIIB,VI A,VA
Thursday,Mrs. Suman,,VIII B,IIB,VI B,IVB,,,
Thursday,Mrs Nidhi,,VII B,VB,VI A,,VB,IVB,VIII A
Thursday,Sh Sumit,VI A,XI ART,,,,X,,VI B
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
Friday,Mr. Seva Singh,VII B,,VII A,,,XI ART,XI SC,XII
Friday,Mr. Ghanshyam,,XII,,,X,IX,,"XI A,B"
Friday,Mr. Sukhvir,XII,,,,XI SC,XI SC,,
Friday,Mrs. Neelam Rani,XI SC,,XII,,,VII B,VII A,
Friday,Mr. Kuldeep,,XII,,XI SC,,XII,XI ART,XI SC
Friday,Mr. Mukesh Kumar,,XI SC,XI SC,X,XII,,,
Friday,Mrs. Jyoti Yadav,,XI SC,XI SC,,XII,,VI B,VI A
Friday,Sh Sahil,XI ART,X,,VIIB,VII A,,,
Friday,Sh Gurmeet,,,VIII B,,XI ART,VIII A,,
Friday,Sh Sandeep,VIII A,VI A,VI B,VII A,,VIII B,,VII B
Friday,Mrs Sangeeta,VI A SKT,IX,,,VII B SKT,,,VII A SKT
Friday,Mrs Ranju,X,VIII B,IX,,,,VIII B,VIII A
Friday,Mr. Dharam Singh,,,VIIB,IX,VI A,VI B,VI A,
Friday,Mrs. Madhu Bala,VIII B,VI B,X,,IX,VI A,VIII A,
Friday,Mr Prateek,,VII B,,XI ART,,XII,IX (YOGA ),X
Friday,Sh Narender,,IVA/IVB,IIB,VIIIA/B,IIIA/IIIB,VA/VB,,
Friday,Mr Nagesh,,VII A,VI A,VI B,VI B,X,XII,IX
Friday,Mr Rajkumar,VI B,VIII A,,,VIII B,,X,
Friday,Sh Manoj,,IIIB,,IVB,,IIB,VB,IVA
Friday,Mrs. Suman,,VB,IIIA,IIIB,IB,VII A,,VA
Friday,Mrs Nidhi,,,,XII,VIII A,IVA,,IIIB
Friday,Sh Sumit,IX,XI ART,XI ART,VI A,,,,VI B
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
Saturday,Mr. Seva Singh,VII B,,VII A,XI SC,XII,XI ART,CLA VII B,CLA VII B
Saturday,Mr. Ghanshyam,,XII,"XI A,B",,X,IX,CLA XI ART,CLA XI ART
Saturday,Mr. Sukhvir,XII,,,,XI SC,XI SC,CLA XII,CLA XII
Saturday,Mrs. Neelam Rani,XI SC,,XII,XII,,VII B,CLA XI Sc,CLA XI Sc
Saturday,Mr. Kuldeep,,XII,XI SC,,,,,
Saturday,Mr. Mukesh Kumar,,XI SC,,X,,XII,,
Saturday,Mrs. Jyoti Yadav,VI B,XI SC,VI A,,,XII,CLA VI B,CLA VI B
Saturday,Sh Sahil,XI ART,,,VIIB,VII A,,,
Saturday,Sh Gurmeet,,,VIII B,XI ART,,VIII A,,
Saturday,Sh Sandeep,VIII A,VI A,,,,VIII B,CLA VII A,CLA VII A
Saturday,Mrs Sangeeta,,,,,VI B SKT,,CLA VIIIA,CLA VIIIA
Saturday,Mrs Ranju,X,VIII B,IX,,VIII A,VII A,CLA X,CLA X
Saturday,Mr. Dharam Singh,,,VIIB,IX,VI A,VI B,CLA IX,CLA IX
Saturday,Mrs. Madhu Bala,VIII B,X,,,,VI A,CLA VIII B,CLA VIII B
Saturday,Mr Prateek,,VII B,,VIII A,VIII B,,,
Saturday,Sh Narender,,IIA/IIB,IA/IB,IIA/B,IA/IB,IIIA/IIIB,,
Saturday,Mr Nagesh,,VIII A,X,VI B,IX,,,
Saturday,Mr Rajkumar,VI A,IX,IIIB,VII A,,VA,CLA VIA,CLA VIA
Saturday,Sh Manoj,,VIIA,,,VII B,IV A,,
Saturday,Mrs. Suman,,,IVA,,,,,
Saturday,Mrs Nidhi,,VI B,,VA,XI ART,IVB,,
Saturday,Sh Sumit,IX,XI ART,VI B,VI A,,X,,
Saturday,Sh Rakesh,VIIA,,VIIIA,VIIIB,,,,
Saturday,Mrs. Pooja,,,,,,,,
Saturday,Mrs. PoonamBW-3,,,,,,,,
Saturday,Principal Sir,X,,,,,,,
Saturday,Ms. Mohini,,,,,,,,
`;
