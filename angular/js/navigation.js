var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
    var navigation = [{
            name: "User",
            classis: "active",
            link: "#/user",
            subnav: []
    }, {
            name: "Process",
            classis: "",
            link: "#/process",
            subnav: []
    }, {
            name: "Leads",
            classis: "",
            link: "#/leads",
            subnav: []
    },



                     ];

    return {
        getnav: function () {
            return navigation;
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

        createuser: function (name, username, password, acesslevel, dob) {
            // console.log(dob);   
            return $http({
                url: "http://localhost:3000/insertuser/",
                method: "GET",
                params: {
                    name: name,
                    userName: username,
                    password: password,
                    acessLevel: acesslevel,
                    birthDate: dob
                }
            });
        },
        viewuser: function () {

            return $http({
                url: "http://localhost:3000/getusers",
                method: "GET",
                params: {}
            });
        },
        deleteuser: function (id) {
            console.log(id);
            return $http({
                url: "http://localhost:3000/deleteuser",
                method: "GET",
                params: {
                    id: id
                }
            });
            // console.log(data);
        },
        edituser: function (id, name, username, password, acesslevel, dob) {
            console.log(id);
            return $http({
                url: "http://localhost:3000/edituser",
                method: "GET",
                params: {
                    id: id,
                    name: name,
                    username: username,
                    acesslevel: acesslevel,
                    dob: dob
                }
            });
            // console.log(data);
        },


        showedituser: function (id) {
            return $http({
                url: "http://localhost:3000/getoneuser",
                method: "GET",
                params: {
                    id: id
                }
            });
        },
        //process functions

        //creating a process
        createprocess: function (pname, supervisior_id, agentsSelected, qualitySelected) {

            console.log(pname, supervisior_id, agentsSelected, qualitySelected);
            return $http({
                url: "http://localhost:3000/insertprocess/",
                method: "GET",
                params: {
                    pname: pname,
                    supervisior: supervisior_id,
                    agents: agentsSelected,
                    quality: qualitySelected
                }
            });

        },

        viewprocess: function () {

            return $http({
                url: "http://localhost:3000/getprocess",
                method: "GET",
                params: {}
            });
            console.log("data");
        },

        deleteprocess: function (id) {
            console.log(id);
            return $http({
                url: "http://localhost:3000/deleteprocess",
                method: "GET",
                params: {
                    id: id
                }
            }); // console.log(data);
        },
        editprocess: function (id1, pname1, supervisiorselected1, agentSelected1, qualitySelected1) {
            console.log(id1, pname1, supervisiorselected1, agentSelected1, qualitySelected1);
            return $http({
                url: "http://localhost:3000/editprocess",
                method: "GET",
                params: {
                    id1: id1,
                    agents1: agentSelected1,
                    pname1: pname1,
                    quality1: qualitySelected1,
                    supervisior1: supervisiorselected1
                }
            });
            // console.log(data);
        }

        ,
        showeditprocess: function (id) {
            return $http({
                url: "http://localhost:3000/getoneprocess",
                method: "GET",
                params: {
                    id: id
                }
            });
        },


        //Functions for Lead
        createlead: function (process_id, lname) {
            console.log("vishal" + process_id);
            return $http({
                url: "http://localhost:3000/insertlead",
                method: "GET",
                params: {
                    process: process_id,
                    lname: lname
                }
            });
        },
        viewlead: function () {
            return $http({
                url: "http://localhost:3000/getleads",
                method: "GET",
                params: {}
            });
            console.log("data" + data);
        },

        deletelead: function (lead_id) {
            console.log("ad;c,sff" + lead_id)
            return $http({
                url: "http://localhost:3000/deletelead/",
                method: "GET",
                params: {
                    id: lead_id
                }
            });
        },
        editlead: function (id, process, lname) {
            console.log(id, process, lname);
            return $http({
                url: "http://localhost:3000/editlead",
                method: "GET",
                params: {
                    lname: lname,
                    id: id,
                    process: process
                }
            });
        },
        showeditlead: function (id) {
            return $http({
                url: "http://localhost:3000/getonelead",
                method: "GET",
                params: {
                    id: id
                }
            });
        }


    }
});