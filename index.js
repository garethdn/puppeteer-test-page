const elementId = "test-element";
const element = document.createElement('div');
const searchParams = new URLSearchParams(location.search);
const timeout = searchParams.get('timeout') ?? 5000;

element.id = elementId;
element.innerText = "Test element";

setTimeout(() => {
    document.body.appendChild(element);
}, timeout);