import fs from 'fs'
import path from 'path'
import {promisify} from 'util'

const fsPromiseMkdir = promisify(fs.mkdir)

const template = {
    models: [],
    config: ["secret.js", "ansiColor.js"],
    router: ["TestController.js"],
    seeders: [],
    middlewares: [],
    folder: ["app.js", "package.json"]
}

export async function boilerplate(args) {
    const name = args.name || 'express-skeleton'
    const dir = path.join("./", name);

    await fsPromiseMkdir(dir).catch(error => {
        console.error(error.message)
        process.exit()
    })

    await createFolder(template, dir).catch((error) => {
        console.error(error.message)
        process.exit()
    })
}

const createFolder = (template, dir) => {
    return new Promise((resolve, reject) => {
        for(let key in template) {
            if(key !== "folder") {
                fs.mkdir(`${dir}/${key}`, (err) => reject(err))
            }
            if(template[key].length !== 0) {

                let copyDir;
                key !== "folder" 
                ? copyDir = path.join(dir, key) 
                : copyDir = dir

                for(let i = 0; i < template[key].length; i++) {
                    fs.copyFile(`${__dirname}/express-skeleton/${template[key][i]}`, `${copyDir}/${template[key][i]}`, (err) => reject(err))
                }
            }
        }
        resolve()
    })
}
