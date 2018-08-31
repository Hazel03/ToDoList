import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

 
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    todos: string[] = [];
    todo: string;
 
    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
 
    }
 
    create() {
        let prompt = this.alertCtrl.create({
        	task: 'Add Task',
        	inputs: [{
        		name: 'task'
        	}],
        	buttons: [
        	{
        		text: 'Cancel'
        	},
        	{
        		text: 'Add',
        		handler: data => {
        			this.todos.push(data);
        		}
        	}
        	]
        });

        prompt.present();
    }

    edit(t) {
		let prompt = this.alertCtrl.create({
			task: 'Edit',
			inputs: [{
				name: 'task'
			}],
			buttons: [
				{
					text: 'Cancel'
				},
				{
					text: 'Save',
					handler: data => {
						let index = this.todos.indexOf(t);
						if(index > -1){
							this.todos[index] = data;
						}
					}
				}
			]
		});
		prompt.present();
	
    }

    delete(item) {
        var index = this.todos.indexOf(item, 0);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}

