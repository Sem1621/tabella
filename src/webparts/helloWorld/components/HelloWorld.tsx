import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div>
        <table>
        <tr>
          <th>App</th>
          <th >Link new tab</th>
          <th>Link Sharepoint</th>
        </tr>
        <tr>
          <td>portale schede tecniche</td>
          <td><a target='_blank' href='http://intranetj.inps.it/PortaleSchedeTecnicheWeb/'>http://intranetj.inps.it/PortaleSchedeTecnicheWeb/</a></td>
          <td><a target='_blank' href="https://itinps.sharepoint.com/sites/PrototipoPortaleIntranet/Pagine/PortaleSchedeTecniche.aspx">https://itinps.sharepoint.com/sites/PrototipoPortaleIntranet/Pagine/PortaleSchedeTecniche.aspx</a></td>
        </tr>
        <tr>
          <td>HUB delle prestazioni non pensionistiche</td>
          <td><a target='_blank' href='http://intranetj.inps.it/HUBpnpGestioneDomande/#/home'>http://intranetj.inps.it/HUBpnpGestioneDomande/#/home</a>  </td>
          <td><a target='_blank' href='https://itinps.sharepoint.com/sites/PrototipoPortaleIntranet/Pagine/HUBPrestazioni.aspx'>https://itinps.sharepoint.com/sites/PrototipoPortaleIntranet/Pagine/HUBPrestazioni.aspx</a> ' </td>
        </tr>
        <tr>
          <td>Cassetto Previdenziale del Cittadino</td>
          <td><a target='_blank' href='http://intranetws2.inps.it/CassettoPrevidenzialeCittadino/'>http://intranetws2.inps.it/CassettoPrevidenzialeCittadino/</a></td>
          <td><a target='_blank' href='https://itinps.sharepoint.com/sites/PrototipoPortaleIntranet/Pagine/CassettoPrevidenziale.aspx'>https://itinps.sharepoint.com/sites/PrototipoPortaleIntranet/Pagine/CassettoPrevidenziale.aspx</a></td>
        </tr>
        <tr>
          <td>Lavoratori Migranti</td>
          <td><a target='_blank' href='http://intranetws2.inps.it/LavoratoriMigranti/formularioxx5.jsp'>http://intranetws2.inps.it/LavoratoriMigranti/formularioxx5.jsp</a></td>
          <td><a target='_blank' href='https://itinps.sharepoint.com/sites/PrototipoPortaleIntranet/Pagine/LavoratoriMigranti.aspx'>
          https://itinps.sharepoint.com/sites/PrototipoPortaleIntranet/Pagine/LavoratoriMigranti.aspx</a></td>
        </tr>
        <tr>
          <td>P@perless</td>
          <td><a target='_blank' href='http://gedoc.inps.it/APP01/Servizi.NetNT/Paperless/Default.aspx'>http://gedoc.inps.it/APP01/Servizi.NetNT/Paperless/Default.aspx</a></td>
          <td><a target='_blank' href='https://itinps.sharepoint.com/sites/PrototipoPortaleIntranet/Pagine/Paperless.aspx'>https://itinps.sharepoint.com/sites/PrototipoPortaleIntranet/Pagine/Paperless.aspx</a></td>
        </tr>
        <tr>
          <td>BookINPS</td>
          <td><a target='_blank' href='http://intranet.inps.it/App01/SunAm/BookINPS/'>'http://intranet.inps.it/App01/SunAm/BookINPS/</a> </td>
          <td><a target='_blank' href='https://itinps.sharepoint.com/sites/PrototipoPortaleIntranet/Pagine/BookINPS.aspx'>https://itinps.sharepoint.com/sites/PrototipoPortaleIntranet/Pagine/BookINPS.aspx</a></td>
        </tr>
        <tr>
          <td>Firma un Documentoz z</td>
          <td><a target='_blank' href='https://intrafd.inps.it/FDWebApplication/console/welcome.do?menu=Firma'>https://intrafd.inps.it/FDWebApplication/console/welcome.do?menu=Firma</a></td>
          <td><a target='_blank' href='https://itinps.sharepoint.com/sites/PrototipoPortaleIntranet/Pagine/FirmaDocumento.aspx'>https://itinps.sharepoint.com/sites/PrototipoPortaleIntranet/Pagine/FirmaDocumento.aspx</a></td>
        </tr>
      </table>
      </div>
    );
  }
}
