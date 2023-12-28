<script context="module" lang="ts">
	import { get, writable } from 'svelte/store';
	import { v4 as uuidv4 } from 'uuid';

	type _toast = {
		id: string;
		text: string;
		type: 'error' | 'success' | 'warning';
		timeout: number;
	};

	const MAX_TOASTS = 3;

	interface ToastStore {
		active: _toast[];
	}

	const toasts = writable<ToastStore>({
		active: []
	});

	export const showToast = ({
		text,
		type,
		timeout = 1000
	}: {
		text: string;
		type: _toast['type'];
		timeout?: number;
	}) => {
		const newToast: _toast = { text, type, id: uuidv4(), timeout };
		const {active} = get(toasts);
		
		if (active.length >= MAX_TOASTS) {
			toasts.update((state) => ({
				active: state.active.toSpliced(0, 1)
			}));
		}

		toasts.update((state) => ({
			active: [...state.active, newToast]
		}));

		let timeoutId: number = setTimeout(() => {
			dismissToast({ id: newToast.id });

			clearTimeout(timeoutId);
		}, timeout);
	};

	export const dismissToast = ({ id }: { id: string }) => {
		toasts.update((state) => ({
			active: state.active.filter((t) => t.id !== id)
		}));
	};
</script>

<script>
	import Toast from './Toast.svelte';
</script>

<div class="fixed z-50 flex flex-col items-center justify-center w-full gap-2 transition-all duration-100 top-2">
	{#each $toasts.active as toast (toast.id)}
		<Toast {...toast} />
	{/each}
</div>
