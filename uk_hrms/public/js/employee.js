   
   frappe.ui.form.on('Employee', {
   
   "date_of_birth": function(frm) {
        let dob=frm.doc.date_of_birth;
        var englishDate = new Date(dob)
        var islamicDate = convertToHijri(englishDate);
        frm.set_value('custom_date',islamicDate);
        
        if (dob) {
            let today = new Date();
            let birthDate = new Date(dob);
            let age= today.getFullYear() - birthDate.getFullYear();
            let monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            frm.set_value('custom_age',age);
        }
    }
 } );
   function calculateDaysLived(frm, birthDate, today) {
    const oneDay = 24 * 60 * 60 * 1000; 
    const daysLived = Math.round(Math.abs((birthDate - today) / oneDay));
    frm.set_value('custom_age', daysLived);
}


function convertToHijri(englishDate) {
   const options = { 
     weekday: 'long',
     year: 'numeric',
     month: 'long',
     day: 'numeric',
     calendar: 'islamic'
   };
   
   const hijriDate = new Date(englishDate);
   const hijriDateString = hijriDate.toLocaleDateString('en-US', options);
   
   return hijriDateString;
 }
 

 