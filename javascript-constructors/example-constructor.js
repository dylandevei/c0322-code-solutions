function ExampleConstructor() {

}
console.log('value of ExampleConstructor:', ExampleConstructor.prototype);
console.log('type of ExampleConstructor:', typeof (ExampleConstructor.prototype));

var newExample = new ExampleConstructor();
console.log('value of newExample:', newExample);
console.log('instance of newExample in ExampleConstructor:', newExample instanceof ExampleConstructor);
