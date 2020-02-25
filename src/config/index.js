
import devConf from './dev'
import prodConf from './prod'
import { merge } from 'lodash'

let config = {} // 配置文件对象，它将会被devConf或prodConf替换

let env = process.env.NODE_ENV // 当前的项目环境
console.log('env=' + env)
if (env === 'dev') {
    merge(config, devConf)
} else if (env === 'production') {
    merge(config, prodConf)
}

export default config


