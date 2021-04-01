import axios from './axios';

var API_CONFIG = {
    comment: [
        {
            name: 'query',
            method: 'GET',
            desc: '评论列表',
            path: '/api/comment/{{id}}/{{type}}',
            params: {
                page: 1,
                order: 'like',
                api_token: 'api_token',
            },
        },
        {
            name: 'create',
            method: 'POST',
            desc: '写评论',
            path: '/api/comment/{{id}}/{{type}}',
            params: {
                api_token: 'api_token',
            },
            data: {
                body: '评论内容',
                user: {
                    id: 1,
                    name: '用户昵称',
                },
            },
        },
        {
            name: 'like',
            method: 'POST',
            desc: '点赞评论',
            path: '/api/comment/{{id}}/like',
        },
        {
            name: 'report',
            method: 'POST',
            desc: '举报评论',
            path: '/api/comment/{{id}}/report',
        },
    ],
};

class APIConstruct {
    constructor(options) {
        this.api = {};
        this.builder(options);
    }

    builder({ config = {} }) {
        Object.keys(config).map(namespace => {
            this._makeApi({
                namespace,
                config: config[namespace],
            });
        });
    }
    _makeApi({ namespace, config = {} }) {
        config.forEach(api => {
            const { name, method, path } = api;
            Object.defineProperty(this.api, `${namespace}/${name}`, {
                value(options = {}) {
                    const { variables, ...props } = options;
                    const url = compileStringTemplate(path, variables);
                    return axios(
                        Object.assign(
                            {
                                url,
                                method,
                            },
                            props,
                        ),
                    );
                },
            });
        });
    }
}

function compileStringTemplate(path, variables = {}) {
    var url = path;
    for (var key in variables) {
        var re = new RegExp('{{' + key + '}}', 'g');
        url = url.replace(re, variables[key]);
    }
    return url;
}

// 注入配置实例化，暴露api出去
export default new APIConstruct({
    config: API_CONFIG,
})['api'];

// 使用
// api['comment/query']({ variables: { id: 1, type: 'article' }, params: { api_token: 'xxx' } });
