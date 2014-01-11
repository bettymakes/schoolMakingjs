function School(){
  this.classes = [];
  var classInstance = {};
  this.makeClass =  function(courseName, students, cost, prof, salary, ta, wage, hours){
    var totalPaid = students * cost;
    var totalExpenses = (prof * salary) + (ta * wage * hours);
    var totalRevenue = totalPaid - totalExpenses;
    classInstance.name = courseName;
    classInstance.total = totalRevenue;
    classInstance.students = students;
    classInstance.cost = cost;
    classInstance.prof = prof;
    classInstance.salary = salary;
    classInstance.ta = ta;
    classInstance.wage = wage;
    classInstance.hours = hours; 
    this.classes.push(classInstance);
    classInstance = {};

    var returnStatement = "The course name is " + courseName + " with " + students + " students."
    return returnStatement;
  };
  this.classInfo = function(obj){
      return obj;
  };
  this.numClasses = function(){
    return this.classes.length;
  };
}