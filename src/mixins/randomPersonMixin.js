import axios from 'axios';

export default {
	data() {
		return {
			personData: null,
		}
	},
	created() {
		axios.get('https://randomuser.me/api/')
			.then(response => this.personData = response.data.results[0]);
	}
}