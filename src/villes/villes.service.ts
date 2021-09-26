import { Injectable } from "@nestjs/common";
import { DATA } from "./villes.data";
import { Ville } from "./villes.model";

@Injectable()
export class VillesService {

    private villes: Ville[] = DATA;

    getVilles(searchName: string, searchCode: string) {
        let villesMetropole: any
        let villesOutreMer: any
        if (searchName !== "") {
            villesMetropole = this.villes
                .filter((ville) => parseInt(ville['codePostal']
                    .slice(0, 2)) <= 95 && ville['nomCommune']
                        .toLowerCase().startsWith(searchName))
                .sort()
                .slice(0, 100)
            villesOutreMer = this.villes
                .filter((ville) => parseInt(ville['codePostal']
                    .slice(0, 2)) >= 97 && ville['nomCommune']
                        .toLowerCase().startsWith(searchName))
                .sort(function (a, b) {
                    if (a['nomCommune'] < b['nomCommune']) { return -1; }
                    if (a['nomCommune'] > b['nomCommune']) { return 1; }
                    return 0;
                })
                .slice(0, 100)
        } else if (searchCode !== "") {
            villesMetropole = this.villes
                .filter((ville) => parseInt(ville['codePostal']
                    .slice(0, 2)) <= 95 && ville['codePostal']
                        .toLowerCase().startsWith(searchCode))
                .sort(function (a, b) {
                    if (a['nomCommune'] < b['nomCommune']) { return -1; }
                    if (a['nomCommune'] > b['nomCommune']) { return 1; }
                    return 0;
                })
                .slice(0, 100)
            villesOutreMer = this.villes
                .filter((ville) => parseInt(ville['codePostal']
                    .slice(0, 2)) >= 97 && ville['codePostal']
                        .toLowerCase().startsWith(searchCode))
                .sort()
                .slice(0, 100)
        }
        return {
            metropole: villesMetropole,
            outreMer: villesOutreMer
        }
    }
}