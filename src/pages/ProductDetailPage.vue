<template>
	<div v-if="productFound">
		<h1>{{ product.name }}</h1>
		<h3>{{ product.price }}</h3>
		<p>{{ product.description }}</p>
		<button @click="addToCart">Add to Cart</button>
	</div>
	<div v-if="!productFound">
		<h1>Oops... we couldn't find that product</h1>
	</div>
</template>

<script>
export default {
	name: 'ProductDetailPage',
	props: ['products'],
	computed: {
		product() {
			return this.products.find(prod => prod.id === this.$route.params.id);
		},
		productFound() {
			return !!this.product;
		}
	},
	emits: ['addToCart'],
	methods: {
		addToCart() {
			this.$emit('addToCart', this.$route.params.id);
		},
	}
};
</script>