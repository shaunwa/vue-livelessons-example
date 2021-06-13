<template>
	<h1 v-flash="100">Employee Of The Month</h1>
	<div v-if="personData">
		<h3>{{ personData.name.first }} {{ personData.name.last }}</h3>
	</div>
</template>

<script>
import randomPersonMixin from '../mixins/randomPersonMixin';

export default {
	name: 'EmployeeOfTheMonthPage',
	mixins: [randomPersonMixin],
}
</script>