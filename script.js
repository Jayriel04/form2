function submitForm(event) {
    event.preventDefault();
  
    var studentId = document.getElementById("student-id").value;
    var name = document.getElementById("name").value;
    var course = document.getElementById("course").value;
    var yearLevel = document.getElementById("year-level").value;
  
    if (!studentId || !name || !course || !yearLevel) {
      alert("Please complete the form!");
      return;
    }
  
    var studentInfo = "Student ID: " + studentId + "<br>" +
                      "Name: " + name + "<br>" +
                      "Course: " + course + "<br>" +
                      "Year Level: " + yearLevel;
  
    document.getElementById("student-info").innerHTML = studentInfo;
}