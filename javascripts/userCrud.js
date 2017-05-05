var FbApi = ((bats) => {

    bats.addUser = (keys, newUser) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                method: 'POST',
                url: `${keys.databaseURL}/users.json`,
                data: JSON.stringify(newUser)
            }).done((response) => {
                resolve(response);
            }).fail((error) => {
                reject(error);
            });
        });
    };

    bats.getUser = (keys, uid) => {
        let users = [];
        return new Promise((resolve, reject) => {
            $.ajax({
                method: 'GET',
                url: `${keys.databaseURL}/users.json?orderBy="uid"&equalTo="${uid}"`
            }).done((user) => {
                console.log("user iffe get", users);
                let response = user;
                Object.keys(response).forEach((key) => {
                    response[key].id = key;
                    users.push(response[key]);
                });
                resolve(users[0]);
            }).fail((error) => {
                reject(error);
            });
        });
    };

    return bats;

})(FbApi || {});
