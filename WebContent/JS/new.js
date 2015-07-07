$(document).ready(
		function() {
			var task = [ {
				"name" : "Test Task #1",
				"date" : "12/01/2012",
				"assigned" : "John Doe"
			}, {
				"name" : "Test Task #2",
				"date" : "12/02/2012",
				"assigned" : "John Doe"
			}, {
				"name" : "Test Task #3",
				"date" : "12/03/2012",
				"assigned" : "John Doe"
			}, {
				"name" : "Test Task #4",
				"date" : "12/04/2012",
				"assigned" : "John Doe"
			}, {
				"name" : "Test Task #5",
				"date" : "12/05/2012",
				"assigned" : "John Doe"
			}, {
				"name" : "Test Task #6",
				"date" : "12/06/2012",
				"assigned" : "John Doe"
			}, {
				"name" : "Test Task #7",
				"date" : "12/07/2012",
				"assigned" : "John Doe"
			} ];
			$("#alertDiv").addClass("hidden");
			function showTask() {
				var str = "";
				var i;
				var len = task.length;
				for (i = 0; i < len; i++) {
					str += "<tr><td>" + task[i].name + "</td><td>"
							+ task[i].date + "</td> <td>" + task[i].assigned
							+ "</tr>"
				}
				// only accessing DOM (table) once to add the task.
				$("#tableBody").html(str);

			}
			showTask();

			// adding add task functionality here
			$("#addTask").click(function() {
				// validate the from before appending the data
				var validateItems = $("#formDiv input");
				for (var i = 0; i < validateItems.length; i++) {
					var x = validateItems.eq(i).val();
					if (x == "" || x == null) {
						validateItems.eq(i).addClass("error");
						$("#alertDiv").removeClass("hidden");
						return false;
					} else {
						validateItems.eq(i).removeClass("error");
					}
					
				}
				var name = $("#newTask").val();
				var taskDate = $("#taskDate").val();
				
				var assignTo = $("#assignTo").val();
				task.push({
					"name" : name,
					"date" : taskDate,
					"assigned" : assignTo
				});
				showTask();
			});

		});
