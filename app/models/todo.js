import DS from "ember-data";
import { Model } from 'ember-pouch';

var Todo = Model.extend({
	title: DS.attr('string'),
	isCompleted : DS.attr('boolean')
});

export default Todo;
