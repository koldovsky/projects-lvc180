var app = angular.module('GroupApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', 'studentService', function ($scope, $mdSidenav, studentService) {
    var allStudents = [];


    $scope.subgroups = [1, 2];
    $scope.selectedsubgroups = [1, 2];
    $scope.isChosenOnly = false;
    //$scope.toggle = function (item, list) {
    //  var idx = list.indexOf(item);
    //  if (idx >-1) {
    //    list.splice(idx, 1);
    //  } else {
    //    list.push(item);
    //  }
    //};
    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
    $scope.toggleChosen = function (item) {
        $scope.isChosenOnly = !$scope.isChosenOnly;
    };
    //$scope.filterBySubgroup = function (student) {
    //  return $scope.exists(student.subgroup, $scope.selectedsubgroups);
    //};

    $scope.filterByChosen = function (student) {
        if ($scope.isChosenOnly) {
            if (student.isChosenProject) {
                console.log(student);
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    };

    $scope.selected = null;
    $scope.students = allStudents;
    $scope.selectStudent = selectStudent;
    $scope.toggleSidenav = toggleSidenav;

    loadStudents();

    function loadStudents() {
        studentService.loadAll()
            .then(function (students) {
                allStudents = students;
                $scope.students = [].concat(students);
                $scope.selected = $scope.students[0];
            })
    }

    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
    }

    function selectStudent(student) {
        $scope.selected = angular.isNumber(student) ? $scope.students[student] : student;
        $scope.toggleSidenav('left');
    }

}]);

app.service('studentService', ['$q', function ($q) {

    var students= [{
        "isChosenProject": 0,
        "name": "Ivan Pelykh",
        "codeSourceUrl": "https://github.com/vanykus/project",
        "websiteUrl": "http://vanykus.github.io/project/",
        "photo": "images/students/pelykh.jpg",
        "cvUrl": ""
    }, {
        "isChosenProject": 0,
        "name": "Lesia Maksymiv",
        "codeSourceUrl": "",
        "websiteUrl": "http://sandramekh.github.io/cv/",
        "photo": "images/students/maksymiv.jpg",
        "cvUrl": "https://drive.google.com/file/d/0Bz4I_3jTm3-tR0NSR01iWVd5Tk0/view"
    }, {
        "isChosenProject": 0,
        "name": "Nazar Vovk",
        "codeSourceUrl": "https://github.com/4asof4ik/cv-page",
        "websiteUrl": "http://4asof4ik.github.io/cv-page",
        "photo": "images/students/vovk.jpg",
        "cvUrl": "https://drive.google.com/open?id=0B7HbDS3YDt4AbUNpbjkzcFpESGc"
    }, {
        "isChosenProject": 0,
        "name": "Bohdan Lypynskyi",
        "codeSourceUrl": "https://github.com/Combs93/Bohdan.git",
        "websiteUrl": "http://combs93.github.io/Bohdan/",
        "photo": "images/students/lypynsky.jpeg",
        "cvUrl": ""
    }, {
        "isChosenProject": 0,
        "name": "Olena Andriushchenko",
        "codeSourceUrl": "https://github.com/andriushchenko/cakes",
        "websiteUrl": "http://andriushchenko.github.io/cakes",
        "photo": "images/students/andriushchenko.jpg",
        "cvUrl": "https://drive.google.com/open?id=0ByibR0ciqDIMR2tjOUR0Tml5RE0"
    }, {
        "isChosenProject": 0,
        "name": "Mariia Strotsiuk",
        "codeSourceUrl": "https://github.com/MariaStrotsyuk/dictrum_factum.git",
        "websiteUrl": " http://mariastrotsyuk.github.io/dictrum_factum",
        "photo": "images/students/strotsiuk.png",
        "cvUrl": "https://drive.google.com/a/ucu.edu.ua/file/d/0By1W5S6K2kZKYlBocllCNEdWV1U/view?usp=sharing"
    }, {
        "isChosenProject": 0,
        "name": "Andrii Voitovych",
        "codeSourceUrl": "https://github.com/avoytovich/hard.git",
        "websiteUrl": "http://avoytovich.github.io/hard",
        "photo": "images/students/voitovych.png",
        "cvUrl": "https://drive.google.com/open?id=0B4dnx8ii9SJpVHVQajBDRmgtZVE"
    }, {
        "isChosenProject": 0,
        "name": "Taras Repetukha",
        "codeSourceUrl": "https://github.com/taras-sarmat/portfolio1/blob/gh-pages/index.html",
        "websiteUrl": "http://taras-sarmat.github.io/portfolio1/",
        "photo": "images/students/repetukha.jpg",
        "cvUrl": "https://drive.google.com/drive/folders/0Bx8Gw5QzKovOWHFSdjlCVi1zYzg"
    }, {
        "isChosenProject": 0,
        "name": "Shchadylo Taras",
        "codeSourceUrl": "https://github.com/Tararas",
        "websiteUrl": "http://tararas.github.io/Taras_project",
        "photo": "images/students/shchadylo.jpg",
        "cvUrl": "https://drive.google.com/open?id=0B63DEi8qgo9nRVkxVDJPNDl4ZEE"
    }, {
        "isChosenProject": 0,
        "name": "Viktoriia Vyshniakova",
        "codeSourceUrl": "https://github.com/yuliyakhomyak",
        "websiteUrl": "http://yuliyakhomyak.github.io/Yuliya",
        "photo": "images/students/vyshniakova.jpg",
        "cvUrl": "https://drive.google.com/open?id=0Bw7mjad6zxTjRHBWTWRuc2FYdkE"
    }, {
        "isChosenProject": 0,
        "name": "Sofia Kryvenko",
        "codeSourceUrl": "https://github.com/SofiaKryvenko/mypage",
        "websiteUrl": "http://sofiakryvenko.github.io/mypage/",
        "photo": "images/students/kryvenko.jpg",
        "cvUrl": "https://drive.google.com/file/d/0B-rrq8407nWJbzdLbkVTU1J6Z00/view"
    }, {
        "isChosenProject": 0,
        "name": "Iryna Orlova",
        "codeSourceUrl": "https://github.com/iorlova",
        "websiteUrl": "http://iorlova.github.io/my-cv",
        "photo": "images/students/orlova.jpg",
        "cvUrl": "https://drive.google.com/open?id=0B3FQqeMXzhWFWGFrUThLS3VjLWM"
    }, {
        "isChosenProject": 0,
        "name": "Karina Kuray",
        "codeSourceUrl": "",
        "websiteUrl": "http://karinakuraj.github.io/resume/",
        "photo": "images/students/kuray.jpg",
        "cvUrl": "https://drive.google.com/open?id=0B_Uv9FEKVvf2TkVSeUNqd3NXS1U"
    }, {
        "isChosenProject": 0,
        "name": "Nataliya Hrabovska",
        "codeSourceUrl": "https://github.com/Nataliya3110/hrabovskamycv",
        "websiteUrl": "http://nataliya3110.github.io/hrabovskamycv",
        "photo": "images/students/hrabovska.jpg",
        "cvUrl": "https://drive.google.com/file/d/0B-wLvbq4WxKza1FjS3VVZXFSck0/view?usp=sharing"
    }, {
        "isChosenProject": 0,
        "name": "Olha Slisarchuk",
        "codeSourceUrl": "https://github.com/OlyaKorchan/111.git",
        "websiteUrl": "http://olyakorchan.github.io/111/",
        "photo": "images/students/slisarchuk.jpg",
        "cvUrl": "https://drive.google.com/file/d/0B0tcKaCYXWOTYk5TQk9JVDFxV0E/view?usp=sharing"
    }, {
        "isChosenProject": 0,
        "name": "Khrystyna Barchyshyn",
        "codeSourceUrl": "https://github.com/KhrystynaBarchyshyn/firstwebsite.git",
        "websiteUrl": "http://khrystynabarchyshyn.github.io/firstwebsite/",
        "photo": "images/students/barchyshyh.jpg",
        "cvUrl": "https://drive.google.com/file/d/0BxdQfyWLq0dPSXdsYUNhYjV0YTA/view?usp=sharing"
    }, {
        "isChosenProject": 0,
        "name": "Roman Pavliv",
        "codeSourceUrl": "https://github.com/uncle-chik/rpavliv.git",
        "websiteUrl": "http://uncle-chik.github.io/rpavliv",
        "photo": "images/students/pavliv.jpg",
        "cvUrl": "https://drive.google.com/open?id=0B-aWlzn0zwCuc0dMdHdoWkQ4ZE0"
    }, {
        "isChosenProject": 0,
        "name": "Mykhailo Dubinin",
        "codeSourceUrl": "https://github.com/midubinin/midubinin-site",
        "websiteUrl": "http://midubinin.github.io/midubinin-site/",
        "photo": "images/students/dubinin.jpg",
        "cvUrl": "https://drive.google.com/file/d/0BxdQfyWLq0dPSXdsYUNhYjV0YTA/view?usp=sharing"
    }, {
        "isChosenProject": 0,
        "name": "Anastasija  Kozubska",
        "codeSourceUrl": "https://github.com/a-a-m-k/myfinalsite",
        "websiteUrl": "http://a-a-m-k.github.io/myfinalsite/",
        "photo": "images/students/kozubska.jpg",
        "cvUrl": ""
    }, {
        "isChosenProject": 0,
        "name": "Uliana Kovtuniak",
        "codeSourceUrl": "https://github.com/ulia-kovtuniak/my-first-steps",
        "websiteUrl": "http://ulia-kovtuniak.github.io/my-first-steps/",
        "photo": "images/students/kovtunyak.jpg",
        "cvUrl": "https://drive.google.com/file/d/0B135xPvRUGv2TnBwNW1mdkZwLTQ/view?usp=sharing"
    }, {
        "isChosenProject": 0,
        "name": "Yevhen Marenkov",
        "codeSourceUrl": "https://github.com/ymaren/marenkov",
        "websiteUrl": "http://ymaren.github.io/marenkov/",
        "photo": "images/students/marenkov.jpg",
        "cvUrl": ""
    }, {
        "isChosenProject": 0,
        "name": "Yustyna Bilyach",
        "codeSourceUrl": "https://github.com/JustynaBil/myfirstwebsite",
        "websiteUrl": "http://justynabil.github.io/myfirstwebsite/",
        "photo": "images/students/bilyach.jpg",
        "cvUrl": ""
    // }, {
    //     "isChosenProject": 0,
    //     "name": "",
    //     "codeSourceUrl": "",
    //     "websiteUrl": "",
    //     "photo": "images/students/",
    //     "cvUrl": ""
    // }, {
    //     "isChosenProject": 0,
    //     "name": "",
    //     "codeSourceUrl": "",
    //     "websiteUrl": "",
    //     "photo": "images/students/",
    //     "cvUrl": ""
    // }, {
    }];

    // Promise-based API
    return {
        loadAll: function () {
            // Simulate async nature of real remote calls
            return $q.when(students);
        }
    };
}]);
