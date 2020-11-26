module.exports = class Database {
     database = null;

     constructor(database) {
          this.database = database;
     }

     get(refPath) {
          return new Promise((resolve, reject) => {
               let ref = this.database.ref(refPath);

               ref.on("value", (snapshot) => {
                    resolve(snapshot.val());
               }, function (errorObject) {
                    console.log(errorObject.code);
               });
          })
     }

     set(refPath, data) {
          let ref = this.database.ref();

          if (!refPath || !data) return;

          ref.child(refPath).set(data);
     }
}
