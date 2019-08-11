var fs = require('fs');
var ScriptsRepository = require('../scripts_repository.js');
var dataFolder = './data/';

test('Save should create a script', () => {
    let repo = new ScriptsRepository();

    let scriptData = {
        name: "test_script1",
        jsCode: "//js code",
        blocklyXml: "<blockly/>"
    };

    let response = repo.save(scriptData);

    expect(repo.scriptExists("test_script1")).toBe(true);
    expect(response.ok).toBe(true);
});

test('Save should create a script(2)', () => {
    let repo = new ScriptsRepository();

    let scriptData = {
        name: "test_my script thing",
        jsCode: "//js code",
        blocklyXml: "<blockly/>"
    };

    let response = repo.save(scriptData);

    expect(repo.scriptExists("test_my_script_thing")).toBe(true);
    expect(response.ok).toBe(true);
});



test('Read should work', () => {
    let repo = new ScriptsRepository();

    let scriptData = {
        name: "test_script1",
        jsCode: "//js code",
        blocklyXml: "<blockly/>"
    };

    let response = repo.save(scriptData);

    let data = repo.read(scriptData.name);

    expect(data.blocklyXml).toBe(scriptData.blocklyXml);
    expect(data.jsCode).toBe(scriptData.jsCode);
});

test('Delete should remove script', () => {
    let repo = new ScriptsRepository();

    let scriptData = {
        name: "test_script1",
        jsCode: "//js code",
        blocklyXml: "<blockly/>"
    };

    let response = repo.save(scriptData);

    repo.delete(scriptData.name);

    expect(repo.scriptExists(scriptData.name)).toBe(false);
    expect(response.ok).toBe(true);
});

test('List should work', () => {
    let repo = new ScriptsRepository();

    let scriptData = {
        name: "test_script1",
        jsCode: "//js code",
        blocklyXml: "<blockly/>"
    };

    repo.save(scriptData);    

    let response = repo.getAll();

    expect(response.ok).toBe(true);
    expect(response.files.length > 0 ).toBe(true);
});

afterEach(() => {
    let repo = new ScriptsRepository();
    var files = fs.readdirSync(repo.getDataFolder()).filter(file => file.startsWith('test_'));

    files.forEach(file => {
        fs.unlinkSync(dataFolder + file);
    });
});