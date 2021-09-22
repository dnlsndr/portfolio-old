<template>
	<section>
		<div class="text-2xl lg:text-4xl font-black mb-5">Recent posts</div>
		<div
			class="
				mb-16
				grid grid-cols-1
				md:grid-cols-2
				lg:grid-cols-3
				xl:grid-cols-4
				gap-8
			"
		>
			<div class="w-full p-6 shadow-xl bg-gray-800 text-white flex flex-col">
				<div class="tracking-wide text-xl font-bold mb-4 text-white">
					Building a high performance worker queue system using RabbitMQ, gRPC
					and Rust in Kubernetes
				</div>
				<div class="text-opacity-75 text-gray-300 mb-6 flex-1">
					We will have a look into building a system that can work on several
					thousand jobs in parallel by leveraging the powers of the RabbitMQ
					messaging system, communicating by gRPC and streamlining it for
					observability.
				</div>
				<div class="flex items-center group">
					<div class="mr-2 text-gray-400 text-opacity-50">
						Not available yet
					</div>
				</div>
			</div>

			<div class="w-full p-6 shadow-xl bg-gray-800 text-white flex flex-col">
				<div class="tracking-wide text-xl font-bold mb-4 text-white">
					Creating a bare metal kubernetes cluster on Hetzner
				</div>
				<div class="text-opacity-75 text-gray-300 mb-6 flex-1">
					We will discuss how we created a Kubernetes cluster on bare metal
					servers, using MetalLB load balancing, Istio service meshing and other
					common deployments one needs for creating private clouds
				</div>
				<div class="flex items-center group">
					<div class="mr-2 text-gray-400 text-opacity-50">
						Not available yet
					</div>
				</div>
			</div>
			<div
				class="
					w-full
					p-6
					shadow-xl
					text-xl text-gray-800
					border-4 border-gray-800
					font-black
					flex flex-col
				"
			>
				More to come soon!
			</div>
			<!-- <div class="w-full p-6 shadow-xl bg-gray-800 text-white flex flex-col">
				<div class="text-2xl font-bold mb-4 text-white">
					Organizing your Kubernetes infrastructure with Helm
				</div>
				<div class="text-opacity-75 text-gray-300 mb-6 flex-1">
					Infrastructure As Code can be done with many different tools. Here we
					will look at how to manifest your infrastructure in a version
					controlled environment without giving up the benefits of Helm.
				</div>
				<div class="flex items-center group">
					<div class="mr-2 text-gray-400 text-opacity-50">
						Not available yet
					</div>
				</div>
			</div> -->
		</div>
	</section>
</template>

<script>
export default {}
</script>

<style></style>
