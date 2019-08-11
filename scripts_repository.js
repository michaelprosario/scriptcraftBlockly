var fs = require('fs');

class ScriptsRepository {
    constructor() 
    {
        this.dataFolder = this.getDataFolder(); 
    }

    getDataFolder(){
        return './data/';
    }

    stringNullOrEmpty(s){
        return s === null || s === "";
    }

    save(scriptData) {
        if(scriptData === null){
            throw "scriptData is null";
        }

        if(this.stringNullOrEmpty(scriptData.name)){
            throw "Name is not defined";
        }

        if(this.stringNullOrEmpty(scriptData.jsCode)){
            throw "jsCode is not defined";
        }

        if(this.stringNullOrEmpty(scriptData.blocklyXml)){
            throw "blocklyXml is not defined";
        }

        scriptData.name = scriptData.name.replace(/ /g,"_");
        
        fs.writeFileSync(`${this.dataFolder}${scriptData.name}.js`, scriptData.jsCode);
        fs.writeFileSync(`${this.dataFolder}${scriptData.name}.xml`, scriptData.blocklyXml);

        return { ok: true };
    }

    read(name){
        if(this.scriptExists(name)) {
            var strJsCode = fs.readFileSync(`${this.dataFolder}${name}.js`, 'utf8');
            var strBlocklyXml = fs.readFileSync(`${this.dataFolder}${name}.xml`, 'utf8');

            return { ok: true, jsCode: strJsCode, blocklyXml: strBlocklyXml, name: name };
        }else{
            return { ok: false, message: "Script not found" }
        }
    }

    getAll(){
        var files = fs.readdirSync(this.dataFolder).filter(file => file.endsWith('.js'));
        return {
            ok: true,
            files: files
        }
    }

    scriptExists(name) {
        if(this.stringNullOrEmpty(name)){
            throw "Name is not defined";
        }
                
        return fs.existsSync(`${this.dataFolder}${name}.js`);
    }

    delete(name){
        if(this.stringNullOrEmpty(name)){
            throw "Name is not defined";
        }

        fs.unlinkSync(`${this.dataFolder}${name}.js`);
        return { ok: true };
    }
}

module.exports = ScriptsRepository;