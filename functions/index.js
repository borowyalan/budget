var round = require("lodash/round");
var admin = require("firebase-admin");
var functions = require("firebase-functions");

admin.initializeApp(functions.config().firebase);
var firestore = admin.firestore();

exports.addUserAmount = functions.firestore
	.document("budget/{expenseID}")
	.onCreate(snapshot => {
		var expenseAmount = snapshot.data().amount;
		var userRef = firestore.collection("users").doc(snapshot.data().author.uid);
		var multiplier = snapshot.data().isLoan ? 2 : 1;

		return firestore.runTransaction(transaction => {
			return transaction.get(userRef).then(userDoc => {
				var newUserAmount =
					parseFloat(userDoc.data().userAmount) +
					parseFloat(expenseAmount) * multiplier;

				return transaction.update(userRef, {
					userAmount: newUserAmount
				});
			});
		});
	});

exports.subtractUserAmount = functions.firestore
	.document("budget/{expenseID}")
	.onDelete(snapshot => {
		var expenseAmount = snapshot.data().amount;
		var userRef = firestore.collection("users").doc(snapshot.data().author.uid);
		var multiplier = snapshot.data().isLoan ? 2 : 1;

		return firestore.runTransaction(transaction => {
			return transaction.get(userRef).then(userDoc => {
				var newUserAmount = round(
					parseFloat(userDoc.data().userAmount) -
						parseFloat(expenseAmount) * multiplier,
					2
				);
				console.log(newUserAmount);

				return transaction.update(userRef, {
					userAmount: newUserAmount
				});
			});
		});
	});
