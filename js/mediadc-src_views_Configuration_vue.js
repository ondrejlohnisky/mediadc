"use strict";(self.webpackChunkmediadc=self.webpackChunkmediadc||[]).push([["src_views_Configuration_vue"],{94502:(t,n,e)=>{e.d(n,{Z:()=>d});var i=e(87537),a=e.n(i),s=e(23645),l=e.n(s)()(a());l.push([t.id,"\nh2[data-v-28b50d2c] {\n\tfont-size: 24px;\n\tfont-weight: bold;\n\ttext-align: center;\n\tmargin: 20px 0 10px;\n}\na[data-v-28b50d2c] {\n\ttext-decoration: underline;\n}\n.installed[data-v-28b50d2c] {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.installed input[data-v-28b50d2c] {\n\tmargin: 0 10px;\n}\n.general-actions[data-v-28b50d2c] {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.dependencies-table[data-v-28b50d2c] {\n\twidth: 100%;\n\toverflow-x: scroll;\n\tmargin: 20px auto;\n}\n.dependencies-table table[data-v-28b50d2c] {\n\tmargin: 0 auto;\n\tposition: relative;\n}\n.dependencies-table table caption[data-v-28b50d2c] {\n\tpadding: 5px 10px;\n\tborder-bottom: 1px solid #dadada;\n}\n.dependencies-table table th[data-v-28b50d2c], .dependencies-table table td[data-v-28b50d2c] {\n\tpadding: 5px 10px;\n\tborder-bottom: 1px solid #dadada;\n\tborder-right: 1px solid #dadada;\n}\n.dependencies-table table th[data-v-28b50d2c]:last-child, .dependencies-table table td[data-v-28b50d2c]:last-child {\n\tborder-right: none;\n}\n.action-blackout[data-v-28b50d2c] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tz-index: 10;\n\tborder-top-left-radius: var(--border-radius-large);\n\tborder-top-right-radius: var(--border-radius-large);\n}\n.install-errors[data-v-28b50d2c] {\n\tmax-height: 50vh;\n\toverflow-y: scroll;\n\tborder: 1px solid var(--color-error);\n\tborder-radius: 5px;\n\tpadding: 0 10px 10px;\n\tmargin: 10px auto;\n}\n.errors-list-item[data-v-28b50d2c] {\n\tborder-bottom: 1px solid var(--color-error);\n\tpadding: 5px;\n\ttext-align-last: left;\n}\n.install-warnings[data-v-28b50d2c] {\n\tmax-height: 50vh;\n\toverflow-y: scroll;\n\tborder: 1px solid var(--color-warning);\n\tborder-radius: 5px;\n\tpadding: 0 10px 10px;\n\tmargin: 10px auto;\n}\n.warnings-list-item[data-v-28b50d2c] {\n\tborder-bottom: 1px solid var(--color-warning);\n\tpadding: 5px;\n\ttext-align-last: left;\n}\n","",{version:3,sources:["webpack://./src/views/Configuration.vue"],names:[],mappings:";AA6NA;CACA,eAAA;CACA,iBAAA;CACA,kBAAA;CACA,mBAAA;AACA;AAEA;CACA,0BAAA;AACA;AAEA;CACA,aAAA;CACA,mBAAA;CACA,uBAAA;AACA;AAEA;CACA,cAAA;AACA;AAEA;CACA,aAAA;CACA,mBAAA;CACA,uBAAA;AACA;AAEA;CACA,WAAA;CACA,kBAAA;CACA,iBAAA;AACA;AAEA;CACA,cAAA;CACA,kBAAA;AACA;AAEA;CACA,iBAAA;CACA,gCAAA;AACA;AAEA;CACA,iBAAA;CACA,gCAAA;CACA,+BAAA;AACA;AAEA;CACA,kBAAA;AACA;AAEA;CACA,kBAAA;CACA,MAAA;CACA,OAAA;CACA,QAAA;CACA,SAAA;CACA,aAAA;CACA,mBAAA;CACA,uBAAA;CACA,oCAAA;CACA,WAAA;CACA,kDAAA;CACA,mDAAA;AACA;AAEA;CACA,gBAAA;CACA,kBAAA;CACA,oCAAA;CACA,kBAAA;CACA,oBAAA;CACA,iBAAA;AACA;AAEA;CACA,2CAAA;CACA,YAAA;CACA,qBAAA;AACA;AAEA;CACA,gBAAA;CACA,kBAAA;CACA,sCAAA;CACA,kBAAA;CACA,oBAAA;CACA,iBAAA;AACA;AAEA;CACA,6CAAA;CACA,YAAA;CACA,qBAAA;AACA",sourcesContent:["\x3c!--\n - @copyright Copyright (c) 2021-2022 Andrey Borysenko <andrey18106x@gmail.com>\n -\n - @copyright Copyright (c) 2021-2022 Alexander Piskun <bigcat88@icloud.com>\n -\n - @author 2021-2022 Andrey Borysenko <andrey18106x@gmail.com>\n -\n - @license AGPL-3.0-or-later\n -\n - This program is free software: you can redistribute it and/or modify\n - it under the terms of the GNU Affero General Public License as\n - published by the Free Software Foundation, either version 3 of the\n - License, or (at your option) any later version.\n -\n - This program is distributed in the hope that it will be useful,\n - but WITHOUT ANY WARRANTY; without even the implied warranty of\n - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the\n - GNU Affero General Public License for more details.\n -\n - You should have received a copy of the GNU Affero General Public License\n - along with this program. If not, see <http://www.gnu.org/licenses/>.\n -\n --\x3e\n\n<template>\n\t<div v-if=\"!loading\" class=\"container\" style=\"text-align: center;\">\n\t\t<h2>{{ rootTitle }}</h2>\n\t\t<div v-if=\"isAdmin\">\n\t\t\t<p>\n\t\t\t\t{{ t('mediadc', 'Welcome to MediaDC. You\\'re almost there! The last setup step - installation of Python dependencies.') }}\n\t\t\t\t<br>\n\t\t\t\t{{ t('mediadc', 'Here you can run automatic installation of Python MediaDC dependencies.') }}\n\t\t\t\t<br>\n\t\t\t\t{{ t('mediadc', 'This may take a few minutes (depending on your system config).') }}\n\t\t\t\t<br>\n\t\t\t\t{{ t('mediadc', 'After checking or installing you can see the results below in a detailed table (installed packages, errors, requirements overview).') }}\n\t\t\t\t<br>\n\t\t\t\t{{ t('mediadc', 'You can install all dependencies manually, please refer documentation for your OS how to do this:') }}\n\t\t\t\t<a href=\"https://github.com/andrey18106/mediadc/wiki\">{{ t('mediadc', 'wikis') }}</a>.\n\t\t\t\t<br>\n\t\t\t\t{{ t('mediadc', 'If you have any additional questions contact us in') }} <a href=\"https://t.me/mediadc_support\">{{ t('mediadc', 'Telegram chat') }}</a>.\n\t\t\t</p>\n\t\t\t<div class=\"installed\">\n\t\t\t\t<NcCheckboxRadioSwitch v-tooltip=\"installed\n\t\t\t\t\t\t? t('mediadc', 'Required packages installed')\n\t\t\t\t\t\t: t('mediadc', 'Required package not installed')\"\n\t\t\t\t\t:checked.sync=\"installed\"\n\t\t\t\t\tstyle=\"margin: 10px auto;\"\n\t\t\t\t\tdisabled>\n\t\t\t\t\t{{ t('mediadc', 'Installed:') }} {{ installed }}\n\t\t\t\t</NcCheckboxRadioSwitch>\n\t\t\t</div>\n\t\t\t<div class=\"general-actions\">\n\t\t\t\t<NcButton class=\"mediadc-button-vue\"\n\t\t\t\t\ttype=\"secondary\"\n\t\t\t\t\t:disabled=\"installing\"\n\t\t\t\t\t@click=\"install\">\n\t\t\t\t\t<template #default>\n\t\t\t\t\t\t{{ !installed ? t('mediadc', 'Install') : t('mediadc', 'Reinstall') }}\n\t\t\t\t\t</template>\n\t\t\t\t\t<template v-if=\"installing\" #icon>\n\t\t\t\t\t\t<span class=\"icon-loading\" />\n\t\t\t\t\t</template>\n\t\t\t\t</NcButton>\n\t\t\t\t<NcButton class=\"mediadc-button-vue\"\n\t\t\t\t\ttype=\"secondary\"\n\t\t\t\t\tstyle=\"margin: 0 10px\"\n\t\t\t\t\t:disabled=\"checking || installing\"\n\t\t\t\t\t@click=\"check\">\n\t\t\t\t\t<template #default>\n\t\t\t\t\t\t{{ t('mediadc', 'Check installation') }}\n\t\t\t\t\t</template>\n\t\t\t\t\t<template v-if=\"checking || installing\" #icon>\n\t\t\t\t\t\t<span class=\"icon-loading\" />\n\t\t\t\t\t</template>\n\t\t\t\t</NcButton>\n\t\t\t\t<NcButton v-if=\"installed\"\n\t\t\t\t\tclass=\"mediadc-button-vue\"\n\t\t\t\t\ttype=\"secondary\"\n\t\t\t\t\t@click=\"finishConfiguration\">\n\t\t\t\t\t{{ t('mediadc', 'Install finished') }}\n\t\t\t\t</NcButton>\n\t\t\t</div>\n\t\t</div>\n\t\t<div v-else-if=\"!isAdmin && !installed && !loading\">\n\t\t\t<p>{{ t('mediadc', 'MediaDC application can be configured only by administration.') }}</p>\n\t\t\t<p>{{ t('mediadc', 'Please contact your cloud administration.') }}</p>\n\t\t</div>\n\t\t<div v-else>\n\t\t\t<NcButton v-if=\"installed\" class=\"mediadc-button-vue\" @click=\"finishConfiguration\">\n\t\t\t\t{{ t('mediadc', 'Go to MediaDC') }}\n\t\t\t</NcButton>\n\t\t</div>\n\t\t<div v-if=\"isAdmin\" class=\"install-details\">\n\t\t\t<div v-if=\"available_algorithms && available_algorithms.length > 0 && installed\"\n\t\t\t\tclass=\"available_algorithms\"\n\t\t\t\tstyle=\"margin: 20px 0 10px;\">\n\t\t\t\t{{ t('mediadc', 'Available algorithms: ') }} {{ available_algorithms.join(', ') }}\n\t\t\t</div>\n\t\t\t<div v-if=\"installed && video_required && video_required.length > 0\">\n\t\t\t\t<strong>{{ t('mediadc', 'Video processing won\\'t work, video_required packages not installed.') }}</strong>\n\t\t\t\t<p>{{ t('mediadc', 'Not installed video_required packages:') }} {{ video_required }}</p>\n\t\t\t\t<p>{{ t('mediadc', 'video_required packages can\\'t be installed automatically, this should be done by administrator manually and then recheck installation on this page.') }}</p>\n\t\t\t</div>\n\t\t\t<div v-if=\"installed_list && Object.keys(installed_list).length > 0\" class=\"dependencies-table\">\n\t\t\t\t<table>\n\t\t\t\t\t<div v-show=\"updating\" class=\"action-blackout\">\n\t\t\t\t\t\t<span class=\"icon-loading\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<caption>{{ t('mediadc', 'Python dependencies list') }}</caption>\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th><b>{{ t('mediadc', 'Type') }}</b></th>\n\t\t\t\t\t\t\t<th><b>{{ t('mediadc', 'Packages') }}</b></th>\n\t\t\t\t\t\t\t<th><b>{{ t('mediadc', 'Installed') }}</b></th>\n\t\t\t\t\t\t\t<th><b>{{ t('mediadc', 'Actions') }}</b></th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr v-for=\"listName in Object.keys(installed_list).sort().reverse()\" :key=\"listName\">\n\t\t\t\t\t\t\t<td>{{ listName }}</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<span v-for=\"(packageName, index) in Object.keys(installed_list[listName]).sort()\" :key=\"packageName\" class=\"package\">\n\t\t\t\t\t\t\t\t\t<span v-tooltip=\"getPackageTooltip(listName, packageName)\">\n\t\t\t\t\t\t\t\t\t\t{{ installed_list[listName][packageName].package }}{{ (index !== Object.keys(installed_list[listName]).length - 1) ? ', ' : '' }}\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>{{ not_installed_list[listName].length === 0 }}</td>\n\t\t\t\t\t\t\t<td style=\"display: flex; align-items: center; justify-content: center;\">\n\t\t\t\t\t\t\t\t<NcButton class=\"mediadc-button-vue\"\n\t\t\t\t\t\t\t\t\t:disabled=\"Object.keys(not_installed_list[listName]).length === 0\"\n\t\t\t\t\t\t\t\t\t@click=\"installDepsList(listName)\">\n\t\t\t\t\t\t\t\t\t{{ t('mediadc', 'Install') }}\n\t\t\t\t\t\t\t\t</NcButton>\n\t\t\t\t\t\t\t\t<NcButton class=\"mediadc-button-vue\"\n\t\t\t\t\t\t\t\t\t:disabled=\"Object.keys(not_installed_list[listName]).length > 0\"\n\t\t\t\t\t\t\t\t\tstyle=\"margin: 0 10px\"\n\t\t\t\t\t\t\t\t\t@click=\"updateDepsList(listName)\">\n\t\t\t\t\t\t\t\t\t{{ t('mediadc', 'Update') }}\n\t\t\t\t\t\t\t\t</NcButton>\n\t\t\t\t\t\t\t\t<NcButton class=\"mediadc-button-vue\"\n\t\t\t\t\t\t\t\t\t:disabled=\"Object.keys(not_installed_list[listName]).length > 0\"\n\t\t\t\t\t\t\t\t\t@click=\"deleteDepsList(listName)\">\n\t\t\t\t\t\t\t\t\t{{ t('mediadc', 'Delete') }}\n\t\t\t\t\t\t\t\t</NcButton>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t\t<div v-if=\"errors && errors.length > 0\" class=\"install-errors\">\n\t\t\t<h3>\n\t\t\t\t<span class=\"icon-error\" />\n\t\t\t\t{{ t('mediadc', 'Configuration errors') }}\n\t\t\t</h3>\n\t\t\t<div class=\"errors-list\">\n\t\t\t\t<div v-for=\"error in errors\" :key=\"error\" class=\"errors-list-item\">\n\t\t\t\t\t<pre>{{ error }}</pre>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div v-if=\"warnings && warnings.length > 0\" class=\"install-warnings\">\n\t\t\t<h3>\n\t\t\t\t<span class=\"icon-alert-outline\" />\n\t\t\t\t{{ t('mediadc', 'Configuration warnings') }}\n\t\t\t</h3>\n\t\t\t<div class=\"warnings-list\">\n\t\t\t\t<div v-for=\"warning in warnings\" :key=\"warning\" class=\"warnings-list-item\">\n\t\t\t\t\t<pre>{{ warning }}</pre>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nimport { getCurrentUser } from '@nextcloud/auth'\n\nimport Configure from '../mixins/Configure.js'\n\nimport NcButton from '@nextcloud/vue/dist/Components/NcButton.js'\nimport NcCheckboxRadioSwitch from '@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch.js'\n\nexport default {\n\tname: 'Configuration',\n\tcomponents: {\n\t\tNcButton,\n\t\tNcCheckboxRadioSwitch,\n\t},\n\tmixins: [\n\t\tConfigure,\n\t],\n\tprops: {\n\t\trootTitle: {\n\t\t\ttype: String,\n\t\t\trequired: true,\n\t\t},\n\t\tloading: {\n\t\t\ttype: Boolean,\n\t\t\trequired: true,\n\t\t},\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tisAdmin: getCurrentUser() === null ? false : getCurrentUser().isAdmin,\n\t\t}\n\t},\n\tmethods: {\n\t\tgetPackageTooltip(listName, packageName) {\n\t\t\tif (this.installed_list[listName][packageName].version !== 'none') {\n\t\t\t\treturn `${this.installed_list[listName][packageName].location}: ${this.installed_list[listName][packageName].version}`\n\t\t\t}\n\t\t\treturn 'Not installed'\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\nh2 {\n\tfont-size: 24px;\n\tfont-weight: bold;\n\ttext-align: center;\n\tmargin: 20px 0 10px;\n}\n\na {\n\ttext-decoration: underline;\n}\n\n.installed {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.installed input {\n\tmargin: 0 10px;\n}\n\n.general-actions {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.dependencies-table {\n\twidth: 100%;\n\toverflow-x: scroll;\n\tmargin: 20px auto;\n}\n\n.dependencies-table table {\n\tmargin: 0 auto;\n\tposition: relative;\n}\n\n.dependencies-table table caption {\n\tpadding: 5px 10px;\n\tborder-bottom: 1px solid #dadada;\n}\n\n.dependencies-table table th, .dependencies-table table td {\n\tpadding: 5px 10px;\n\tborder-bottom: 1px solid #dadada;\n\tborder-right: 1px solid #dadada;\n}\n\n.dependencies-table table th:last-child, .dependencies-table table td:last-child {\n\tborder-right: none;\n}\n\n.action-blackout {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n\tz-index: 10;\n\tborder-top-left-radius: var(--border-radius-large);\n\tborder-top-right-radius: var(--border-radius-large);\n}\n\n.install-errors {\n\tmax-height: 50vh;\n\toverflow-y: scroll;\n\tborder: 1px solid var(--color-error);\n\tborder-radius: 5px;\n\tpadding: 0 10px 10px;\n\tmargin: 10px auto;\n}\n\n.errors-list-item {\n\tborder-bottom: 1px solid var(--color-error);\n\tpadding: 5px;\n\ttext-align-last: left;\n}\n\n.install-warnings {\n\tmax-height: 50vh;\n\toverflow-y: scroll;\n\tborder: 1px solid var(--color-warning);\n\tborder-radius: 5px;\n\tpadding: 0 10px 10px;\n\tmargin: 10px auto;\n}\n\n.warnings-list-item {\n\tborder-bottom: 1px solid var(--color-warning);\n\tpadding: 5px;\n\ttext-align-last: left;\n}\n</style>\n"],sourceRoot:""}]);const d=l},19984:(t,n,e)=>{e.r(n),e.d(n,{default:()=>x});var i=e(45994),a=e(96679),s=e(10861),l=e.n(s),d=e(20571),o=e.n(d);const r={name:"Configuration",components:{NcButton:l(),NcCheckboxRadioSwitch:o()},mixins:[a.Z],props:{rootTitle:{type:String,required:!0},loading:{type:Boolean,required:!0}},data:function(){return{isAdmin:null!==(0,i.ts)()&&(0,i.ts)().isAdmin}},methods:{getPackageTooltip:function(t,n){return"none"!==this.installed_list[t][n].version?"".concat(this.installed_list[t][n].location,": ").concat(this.installed_list[t][n].version):"Not installed"}}};var c=e(93379),A=e.n(c),p=e(7795),u=e.n(p),m=e(90569),g=e.n(m),v=e(3565),b=e.n(v),h=e(19216),C=e.n(h),_=e(44589),f=e.n(_),y=e(94502),k={};k.styleTagTransform=f(),k.setAttributes=b(),k.insert=g().bind(null,"head"),k.domAPI=u(),k.insertStyleElement=C();A()(y.Z,k);y.Z&&y.Z.locals&&y.Z.locals;const x=(0,e(51900).Z)(r,(function(){var t=this,n=t._self._c;return t.loading?t._e():n("div",{staticClass:"container",staticStyle:{"text-align":"center"}},[n("h2",[t._v(t._s(t.rootTitle))]),t._v(" "),t.isAdmin?n("div",[n("p",[t._v("\n\t\t\t"+t._s(t.t("mediadc","Welcome to MediaDC. You're almost there! The last setup step - installation of Python dependencies."))+"\n\t\t\t"),n("br"),t._v("\n\t\t\t"+t._s(t.t("mediadc","Here you can run automatic installation of Python MediaDC dependencies."))+"\n\t\t\t"),n("br"),t._v("\n\t\t\t"+t._s(t.t("mediadc","This may take a few minutes (depending on your system config)."))+"\n\t\t\t"),n("br"),t._v("\n\t\t\t"+t._s(t.t("mediadc","After checking or installing you can see the results below in a detailed table (installed packages, errors, requirements overview)."))+"\n\t\t\t"),n("br"),t._v("\n\t\t\t"+t._s(t.t("mediadc","You can install all dependencies manually, please refer documentation for your OS how to do this:"))+"\n\t\t\t"),n("a",{attrs:{href:"https://github.com/andrey18106/mediadc/wiki"}},[t._v(t._s(t.t("mediadc","wikis")))]),t._v(".\n\t\t\t"),n("br"),t._v("\n\t\t\t"+t._s(t.t("mediadc","If you have any additional questions contact us in"))+" "),n("a",{attrs:{href:"https://t.me/mediadc_support"}},[t._v(t._s(t.t("mediadc","Telegram chat")))]),t._v(".\n\t\t")]),t._v(" "),n("div",{staticClass:"installed"},[n("NcCheckboxRadioSwitch",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.installed?t.t("mediadc","Required packages installed"):t.t("mediadc","Required package not installed"),expression:"installed\n\t\t\t\t\t? t('mediadc', 'Required packages installed')\n\t\t\t\t\t: t('mediadc', 'Required package not installed')"}],staticStyle:{margin:"10px auto"},attrs:{checked:t.installed,disabled:""},on:{"update:checked":function(n){t.installed=n}}},[t._v("\n\t\t\t\t"+t._s(t.t("mediadc","Installed:"))+" "+t._s(t.installed)+"\n\t\t\t")])],1),t._v(" "),n("div",{staticClass:"general-actions"},[n("NcButton",{staticClass:"mediadc-button-vue",attrs:{type:"secondary",disabled:t.installing},on:{click:t.install},scopedSlots:t._u([{key:"default",fn:function(){return[t._v("\n\t\t\t\t\t"+t._s(t.installed?t.t("mediadc","Reinstall"):t.t("mediadc","Install"))+"\n\t\t\t\t")]},proxy:!0},t.installing?{key:"icon",fn:function(){return[n("span",{staticClass:"icon-loading"})]},proxy:!0}:null],null,!0)}),t._v(" "),n("NcButton",{staticClass:"mediadc-button-vue",staticStyle:{margin:"0 10px"},attrs:{type:"secondary",disabled:t.checking||t.installing},on:{click:t.check},scopedSlots:t._u([{key:"default",fn:function(){return[t._v("\n\t\t\t\t\t"+t._s(t.t("mediadc","Check installation"))+"\n\t\t\t\t")]},proxy:!0},t.checking||t.installing?{key:"icon",fn:function(){return[n("span",{staticClass:"icon-loading"})]},proxy:!0}:null],null,!0)}),t._v(" "),t.installed?n("NcButton",{staticClass:"mediadc-button-vue",attrs:{type:"secondary"},on:{click:t.finishConfiguration}},[t._v("\n\t\t\t\t"+t._s(t.t("mediadc","Install finished"))+"\n\t\t\t")]):t._e()],1)]):t.isAdmin||t.installed||t.loading?n("div",[t.installed?n("NcButton",{staticClass:"mediadc-button-vue",on:{click:t.finishConfiguration}},[t._v("\n\t\t\t"+t._s(t.t("mediadc","Go to MediaDC"))+"\n\t\t")]):t._e()],1):n("div",[n("p",[t._v(t._s(t.t("mediadc","MediaDC application can be configured only by administration.")))]),t._v(" "),n("p",[t._v(t._s(t.t("mediadc","Please contact your cloud administration.")))])]),t._v(" "),t.isAdmin?n("div",{staticClass:"install-details"},[t.available_algorithms&&t.available_algorithms.length>0&&t.installed?n("div",{staticClass:"available_algorithms",staticStyle:{margin:"20px 0 10px"}},[t._v("\n\t\t\t"+t._s(t.t("mediadc","Available algorithms: "))+" "+t._s(t.available_algorithms.join(", "))+"\n\t\t")]):t._e(),t._v(" "),t.installed&&t.video_required&&t.video_required.length>0?n("div",[n("strong",[t._v(t._s(t.t("mediadc","Video processing won't work, video_required packages not installed.")))]),t._v(" "),n("p",[t._v(t._s(t.t("mediadc","Not installed video_required packages:"))+" "+t._s(t.video_required))]),t._v(" "),n("p",[t._v(t._s(t.t("mediadc","video_required packages can't be installed automatically, this should be done by administrator manually and then recheck installation on this page.")))])]):t._e(),t._v(" "),t.installed_list&&Object.keys(t.installed_list).length>0?n("div",{staticClass:"dependencies-table"},[n("table",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.updating,expression:"updating"}],staticClass:"action-blackout"},[n("span",{staticClass:"icon-loading"})]),t._v(" "),n("caption",[t._v(t._s(t.t("mediadc","Python dependencies list")))]),t._v(" "),n("thead",[n("tr",[n("th",[n("b",[t._v(t._s(t.t("mediadc","Type")))])]),t._v(" "),n("th",[n("b",[t._v(t._s(t.t("mediadc","Packages")))])]),t._v(" "),n("th",[n("b",[t._v(t._s(t.t("mediadc","Installed")))])]),t._v(" "),n("th",[n("b",[t._v(t._s(t.t("mediadc","Actions")))])])])]),t._v(" "),n("tbody",t._l(Object.keys(t.installed_list).sort().reverse(),(function(e){return n("tr",{key:e},[n("td",[t._v(t._s(e))]),t._v(" "),n("td",t._l(Object.keys(t.installed_list[e]).sort(),(function(i,a){return n("span",{key:i,staticClass:"package"},[n("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.getPackageTooltip(e,i),expression:"getPackageTooltip(listName, packageName)"}]},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.installed_list[e][i].package)+t._s(a!==Object.keys(t.installed_list[e]).length-1?", ":"")+"\n\t\t\t\t\t\t\t\t")])])})),0),t._v(" "),n("td",[t._v(t._s(0===t.not_installed_list[e].length))]),t._v(" "),n("td",{staticStyle:{display:"flex","align-items":"center","justify-content":"center"}},[n("NcButton",{staticClass:"mediadc-button-vue",attrs:{disabled:0===Object.keys(t.not_installed_list[e]).length},on:{click:function(n){return t.installDepsList(e)}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.t("mediadc","Install"))+"\n\t\t\t\t\t\t\t")]),t._v(" "),n("NcButton",{staticClass:"mediadc-button-vue",staticStyle:{margin:"0 10px"},attrs:{disabled:Object.keys(t.not_installed_list[e]).length>0},on:{click:function(n){return t.updateDepsList(e)}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.t("mediadc","Update"))+"\n\t\t\t\t\t\t\t")]),t._v(" "),n("NcButton",{staticClass:"mediadc-button-vue",attrs:{disabled:Object.keys(t.not_installed_list[e]).length>0},on:{click:function(n){return t.deleteDepsList(e)}}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.t("mediadc","Delete"))+"\n\t\t\t\t\t\t\t")])],1)])})),0)])]):t._e()]):t._e(),t._v(" "),t.errors&&t.errors.length>0?n("div",{staticClass:"install-errors"},[n("h3",[n("span",{staticClass:"icon-error"}),t._v("\n\t\t\t"+t._s(t.t("mediadc","Configuration errors"))+"\n\t\t")]),t._v(" "),n("div",{staticClass:"errors-list"},t._l(t.errors,(function(e){return n("div",{key:e,staticClass:"errors-list-item"},[n("pre",[t._v(t._s(e))])])})),0)]):t._e(),t._v(" "),t.warnings&&t.warnings.length>0?n("div",{staticClass:"install-warnings"},[n("h3",[n("span",{staticClass:"icon-alert-outline"}),t._v("\n\t\t\t"+t._s(t.t("mediadc","Configuration warnings"))+"\n\t\t")]),t._v(" "),n("div",{staticClass:"warnings-list"},t._l(t.warnings,(function(e){return n("div",{key:e,staticClass:"warnings-list-item"},[n("pre",[t._v(t._s(e))])])})),0)]):t._e()])}),[],!1,null,"28b50d2c",null).exports}}]);
//# sourceMappingURL=mediadc-src_views_Configuration_vue.js.map?v=42f6ac93f4d84614268a