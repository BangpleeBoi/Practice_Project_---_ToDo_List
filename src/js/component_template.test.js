const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { JSDOM } = require('jsdom');
import { taskComponent } from './component_template.js';


describe('Task Card Tests', () => {
    let document;
    beforeEach(() => {
        const dom = new JSDOM();
        document = dom.window.document;
    });

    it('renders correctly from the input array object', () => {
        const task = { description: 'Sample Task', dueDate: '2022-09-15', tags: ['important'] };
        const card = taskComponent(task, document);
        expect(card.querySelector('.task-description').textContent).toBe('Sample Task');
    });

    it('changes to input mode when edit button is clicked', () => {
        const task = { description: 'Sample Task', dueDate: '2022-09-15', tags: ['important'] };
        const card = taskComponent(task, document);
        const editButton = card.querySelector('.edit-button');
        editButton.click();
        expect(card.querySelector('.task-input').value).toBe('Sample Task');
    });

    it('the input mode has prior value stored', () => {
        const task = { description: 'Sample Task', dueDate: '2022-09-15', tags: ['important'] };
        const card = taskComponent(task, document);
        const editButton = card.querySelector('.edit-button');
        editButton.click();
        const input = card.querySelector('.task-input');
        expect(input.value).toBe('Sample Task');
    });

    it('updates the original task object and card after save', () => {
        const task = { description: 'Sample Task', dueDate: '2022-09-15', tags: ['important'] };
        const card = taskComponent(task, document);
        const editButton = card.querySelector('.edit-button');
        editButton.click();
        const input = card.querySelector('.task-input');
        input.value = 'Updated Task';
        const saveButton = card.querySelector('.save-button');
        saveButton.click();
        expect(task.description).toBe('Updated Task');
        expect(card.querySelector('.task-description').textContent).toBe('Updated Task');
    });
});