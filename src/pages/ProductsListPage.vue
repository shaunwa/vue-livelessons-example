<template>
	<h2>Available Items:</h2>
	<div v-for="product in products" :key="product.id">
		<router-link :to="`/products/${product.id}`">
			<h3>{{ product.name }}</h3>
		</router-link>
		<p>{{ product.price }}</p>
		<button @click="addToCart(product.id)">Add to Cart</button>
	</div>
</template>

<script>
export default {
	name: 'ProductsListPage',
	props: ['products'],
	emits: ['addToCart'],
	methods: {
		addToCart(id) {
			this.$emit('addToCart', id);
		},
	}
};
</script>