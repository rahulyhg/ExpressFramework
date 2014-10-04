var phonecatControllers = angular.module('phonecatControllers', ['templateservicemod', 'navigationservice']);

phonecatControllers.controller('home', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService, $http) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = "views/content.html";
        $scope.navigation = NavigationService.getnav();


  }]);
phonecatControllers.controller('process', ['$scope', 'TemplateService', 'NavigationService', '$http',

  function ($scope, TemplateService, NavigationService, $http) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Process");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = "views/process.html";
        $scope.navigation = NavigationService.getnav();
        $scope.flag = ""
        //On Sucess
        var onviewsucess = function (data, status) {
            console.log(data);
            $scope.acesslevel = data;
            console.log($scope.acesslevel);

        }
        var onProcessCreateSucess = function (data, status) {
            console.log($scope.agents);
            NavigationService.viewprocess().success(onViewProcessSucess); //Loading Users initially

        }

        var onViewProcessSucess = function (data, status) {
            console.log(data);
            $scope.processview = data;
        }
        var onShowEditProcessSucess = function (data, status) {
            console.log(data);

            $scope.pname1 = data.pname;
            $scope.qualitySelected1 = data.quality;
            $scope.agentSelected1 = data.agents;
            $scope.supervisiorselected1 = data.supervisior._id;
            $scope.id1 = data._id;
            console.log(data.supervisior.name);


        }

        var onProcessDeleteSucess = function (data, status) {
            console.log(data);
            NavigationService.viewprocess().success(onViewProcessSucess); //Loading Users initially

        }

        var oneditprocessSucess = function (data, status) {
            console.log(data);
            $scope.flag = "";
            NavigationService.viewprocess().success(onViewProcessSucess);
        }

        //Functions 

        NavigationService.viewuser().success(onviewsucess); //Loading Users initially
        NavigationService.viewprocess().success(onViewProcessSucess); //Loading Users initially

        //creating an process
        $scope.createprocess = function (pname, supervisior, agentSelected, qualitySelected) {



            NavigationService.createprocess(pname, supervisior._id, agentSelected, qualitySelected).success(onProcessCreateSucess); //Creating Process
        }
        $scope.deleteprocess = function (id) {
            console.log(id);
            NavigationService.deleteprocess(id).success(onProcessDeleteSucess); //Deleting Process

        },
        $scope.editprocess = function (id1, pname1, supervisiorselected1, agentSelected1, qualitySelected1) {

            NavigationService.editprocess(id1, pname1, supervisiorselected1, agentSelected1, qualitySelected1).success(oneditprocessSucess); //Deleting Process

        },
        $scope.showeditprocess = function (id) {
            $scope.flag = 1;
            console.log(id);
            NavigationService.showeditprocess(id).success(onShowEditProcessSucess); //Deleting Process

        }



  }]);

phonecatControllers.controller('leads', ['$scope', 'TemplateService', 'NavigationService', '$http',
  function ($scope, TemplateService, NavigationService, $http) {
        $scope.template = TemplateService;
        TemplateService.content = "views/leads.html";
        $scope.menutitle = NavigationService.makeactive("Leads");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.flag = "" //flag for toggling between edit and create forms
        //onSucess
        var onviewsucess = function (data, status) {
            console.log(data);
            $scope.acesslevel = data;
        }
        var onViewProcessSucess = function (data, status) {
            console.log(data);
            $scope.processview = data;
        }
        var onLeadCreateSucess = function (data, status) {
            console.log(data);
            NavigationService.viewlead().success(onleadsucess); //Loading Users initially
            $scope.processselected = "";
            $scope.lname = "";
        }
        var onLeadDeleteSucess = function (data, status) {
            NavigationService.viewlead().success(onleadsucess); //Loading Users initially
        }
        var onShowEditLeadSucess = function (data, status) {
            console.log(data);
            $scope.id1 = data._id;
            $scope.lname1 = data.leadName;
            $scope.processSelected = data.pname._id;
            console.log(data.pname.pname);

        }
        var onleadsucess = function (data, status) {
            console.log(data);
            $scope.leadview = data;
        }
        var oneditsucess = function (data, status) {
                NavigationService.viewlead().success(onleadsucess); //Loading Users initially

            }
            //Functions
        NavigationService.viewuser().success(onviewsucess); //Loading Users initially
        NavigationService.viewprocess().success(onViewProcessSucess); //Loading Users initially
        NavigationService.viewlead().success(onleadsucess); //Loading Users initially

        $scope.createlead = function (process_id, lname) {
            console.log(process_id._id, lname);
            NavigationService.createlead(process_id._id, lname).success(onLeadCreateSucess)
        }
        $scope.deltelead = function (lead_id) {
            console.log(lead_id);
            NavigationService.deletelead(lead_id).success(onLeadDeleteSucess);
            NavigationService.viewlead().success(onleadsucess); //Loading Users initially
            $scope.flag = "";
        },


        $scope.editlead = function (id, process, lname) {
            console.log(id, process, lname);
            NavigationService.editlead(id, process, lname).success(oneditsucess); //Loading Users initially

        },
        $scope.showeditlead = function (id) {
            $scope.flag = 1;
            console.log(id);
            NavigationService.showeditlead(id).success(onShowEditLeadSucess); //Deleting Process

        }



  }]);



/*function AlertDemoCtrl($scope) {
    $scope.alerts = [
        {
            type: 'danger',
            msg: 'Oh snap! Change a few things up and try submitting again.'
        },
        {
            type: 'success',
            msg: 'Well done! You successfully read this important alert message.'
        }
    ];

    $scope.addAlert = function () {
        $scope.alerts.push({
            msg: 'Another alert!'
        });
    };

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

}*/

phonecatControllers.controller('user', ['$scope', 'TemplateService', 'NavigationService', '$http',

  function ($scope, TemplateService, NavigationService, $http) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("User");
        TemplateService.title = $scope.menutitle;
        TemplateService.content = "views/user.html";
        $scope.navigation = NavigationService.getnav();


        $scope.flag = "";

        var id1 = "";


        /*      $scope.showform = function()
      {
          $scope.flag = 1;
      }
  */
        //On sucess Functions     
        var oncreatesucess = function (data, status) {
            console.log(data);

        }
        var ondeletesucess = function (data, status) {
            console.log(data);
            NavigationService.viewuser().success(onviewsucess);
            $scope.flag = "";
        }
        var onshoweditSucess = function (data, status) {
            console.log(data);


            $scope.name1 = data.name;
            $scope.username1 = data.userName;
            $scope.password1 = data.password;
            $scope.acesslevel1 = data.acessLevel;
            $scope.dob1 = data.birthDate;
            $scope.id1 = data._id;
            console.log($scope.id1);
        }

        var onviewsucess = function (data, status) {
            $scope.view = data;
            console.log(data);
        }
        var oneditsucess = function (data, status) {
                NavigationService.viewuser().success(onviewsucess);
                $scope.flag = "" //flag for toggling between edit and create forms
            }
            // Function calling for user

        NavigationService.viewuser().success(onviewsucess);

        $scope.createUser = function (name, username, password, acesslevel, dob) {

            NavigationService.createuser(name, username, password, acesslevel, dob).success(oncreatesucess);
            NavigationService.viewuser().success(onviewsucess);
            $scope.name = "";
            $scope.username1ame1 = "";
            $scope.password1 = "";
            $scope.acesslevel1 = "";
            $scope.dob1 = "";

        },
        $scope.deleteuser = function (id) {
            console.log(id);
            NavigationService.deleteuser(id).success(ondeletesucess);
        },
        /*$scope.showedituser = function (id, name, username, password, acesslevel, dob) {
    console.log($scope.dob);
    $scope.flag = 1;
    $scope.id1 = id;
    $scope.name1 = name;
    $scope.username1 = username;
    $scope.password1 = password;
    $scope.acesslevel1 = acesslevel;
    $scope.dob1 = dob;
},*/
        $scope.edituser = function (id, name, username, password, acesslevel, dob) {
            console.log();
            NavigationService.edituser(id, name, username, password, acesslevel, dob).success(oneditsucess);
        },
        $scope.showedituser = function (id) {
            $scope.flag = 1;
            console.log(id);
            NavigationService.showedituser(id).success(onshoweditSucess); //Deleting Process

        }
  }]),

phonecatControllers.controller('contact', ['$scope', 'TemplateService', 'NavigationService',
  function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        $scope.menutitle = NavigationService.makeactive("Contact");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
  }]);


phonecatControllers.controller('headerctrl', ['$scope', 'TemplateService', '$http',

 function ($scope, TemplateService) {
        $scope.template = TemplateService;
  }]);