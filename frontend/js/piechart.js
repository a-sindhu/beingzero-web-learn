google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Platform', 'Problems Solved'],
          ['LeetCode',     25],
          ['CodeChef',      78],
          ['CodeForces',  45],
          ['VJudge', 127],
          ['MentorPick',    178]
        ]);

        var options = {
          title: 'No Of Problems Solved In Different Platforms'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }