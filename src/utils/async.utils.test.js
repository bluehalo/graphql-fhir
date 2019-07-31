const wrapper = require('./async.utils.js');

describe('Async Utils Tests', () => {
	test('should pass data back from a promise', async () => {
		let promise = Promise.resolve('Aegon');
		let [err, results] = await wrapper(promise);
		expect(err).toBeUndefined();
		expect(results).toBe('Aegon');
	});

	test('should pass an error back from a promise', async () => {
		let promise = Promise.reject('Cersei');
		let [err, results] = await wrapper(promise);
		expect(err).toBe('Cersei');
		expect(results).toBeUndefined();
	});

	test('should handle uncaught exceptions in async', async () => {
		let func = async () => {
			throw 'Tyrion';
		};

		let [err, results] = await wrapper(func());
		expect(err).toBe('Tyrion');
		expect(results).toBeUndefined();
	});

	test('should pass data back in an async function', async () => {
		let func = async () => {
			return 'Daenerys';
		};

		let [err, results] = await wrapper(func());
		expect(err).toBeUndefined();
		expect(results).toBe('Daenerys');
	});
});
