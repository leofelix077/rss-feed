import { RootState } from "../redux/rootReducer";
import { SupportedLocale } from "../constants";

export const getMockState = (): RootState => ({
  localeDetector: {
    currentLocale: SupportedLocale.Portuguese,
  },
  rssFeed: {
    feedResult: {
      items: [
        {
          creator: "szsoppa",
          title: "Why Teams Will Defeat Slack in the Long Run",
          link: "https://curiosum.dev/blog/slack_vs_teams_who_wins",
          pubDate: "Fri, 03 Jul 2020 06:36:50 +0000",
          "dc:creator": "szsoppa",
          comments: "https://news.ycombinator.com/item?id=23721582",
          content:
            '\n<p>Article URL: <a href="https://curiosum.dev/blog/slack_vs_teams_who_wins">https://curiosum.dev/blog/slack_vs_teams_who_wins</a></p>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721582">https://news.ycombinator.com/item?id=23721582</a></p>\n<p>Points: 1</p>\n<p># Comments: 1</p>\n',
          contentSnippet:
            "Article URL: https://curiosum.dev/blog/slack_vs_teams_who_wins\nComments URL: https://news.ycombinator.com/item?id=23721582\nPoints: 1\n# Comments: 1",
          guid: "https://news.ycombinator.com/item?id=23721582",
          isoDate: "2020-07-03T06:36:50.000Z",
        },
        {
          creator: "divisha",
          title:
            "DMS: Unable to establish connection between AWS and on-premise system",
          link: "https://news.ycombinator.com/item?id=23721577",
          pubDate: "Fri, 03 Jul 2020 06:35:46 +0000",
          "dc:creator": "divisha",
          comments: "https://news.ycombinator.com/item?id=23721577",
          content:
            '\n<p>I am trying to migrate data from the on-premise database to AWS cloud using DMS and facing issue while establishing connection between them .<p>I have created the source endpoint by giving the details of the server and database( DB2 ) , but it keeps on failing even after allowing ALL TRAFFIC rules for both, inbound and outbound in the security group.<p>The error message:<p>Test Endpoint failed: Application-Status: 1020912, Application-Message: Cannot connect to DB2 LUW Server  Network error has occurred, Application-Detailed-Message: RetCode: SQL_ERROR  SqlState: 08001 NativeError: -30081 Message: [unixODBC][IBM][CLI Driver] SQL30081N  A communication error has been detected. Communication protocol being used: "TCP/IP".  Communication API being used: "SOCKETS".  Location where the error was detected: "192.168.<i>.</i>".  Communication function detecting the error: "selectForConnectTimeout".  Protocol specific error code(s): "115", "<i>", "</i>".  SQLSTATE=08001<p>Is there any way to make the connection successful without using Site-to-Site VPN?</p>\n<hr>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721577">https://news.ycombinator.com/item?id=23721577</a></p>\n<p>Points: 1</p>\n<p># Comments: 0</p>\n',
          contentSnippet:
            'I am trying to migrate data from the on-premise database to AWS cloud using DMS and facing issue while establishing connection between them .I have created the source endpoint by giving the details of the server and database( DB2 ) , but it keeps on failing even after allowing ALL TRAFFIC rules for both, inbound and outbound in the security group.The error message:Test Endpoint failed: Application-Status: 1020912, Application-Message: Cannot connect to DB2 LUW Server  Network error has occurred, Application-Detailed-Message: RetCode: SQL_ERROR  SqlState: 08001 NativeError: -30081 Message: [unixODBC][IBM][CLI Driver] SQL30081N  A communication error has been detected. Communication protocol being used: "TCP/IP".  Communication API being used: "SOCKETS".  Location where the error was detected: "192.168..".  Communication function detecting the error: "selectForConnectTimeout".  Protocol specific error code(s): "115", "", "".  SQLSTATE=08001Is there any way to make the connection successful without using Site-to-Site VPN?\n\nComments URL: https://news.ycombinator.com/item?id=23721577\nPoints: 1\n# Comments: 0',
          guid: "https://news.ycombinator.com/item?id=23721577",
          isoDate: "2020-07-03T06:35:46.000Z",
        },
        {
          creator: "williswee",
          title:
            "Popsical bags $5m to bring a ‘Spotify for karaoke’ to Southeast Asia",
          link:
            "https://www.techinasia.com/popsical-bags-5m-bring-spotfiy-karaoke-southeast-asia",
          pubDate: "Fri, 03 Jul 2020 06:33:39 +0000",
          "dc:creator": "williswee",
          comments: "https://news.ycombinator.com/item?id=23721570",
          content:
            '\n<p>Article URL: <a href="https://www.techinasia.com/popsical-bags-5m-bring-spotfiy-karaoke-southeast-asia">https://www.techinasia.com/popsical-bags-5m-bring-spotfiy-karaoke-southeast-asia</a></p>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721570">https://news.ycombinator.com/item?id=23721570</a></p>\n<p>Points: 1</p>\n<p># Comments: 0</p>\n',
          contentSnippet:
            "Article URL: https://www.techinasia.com/popsical-bags-5m-bring-spotfiy-karaoke-southeast-asia\nComments URL: https://news.ycombinator.com/item?id=23721570\nPoints: 1\n# Comments: 0",
          guid: "https://news.ycombinator.com/item?id=23721570",
          isoDate: "2020-07-03T06:33:39.000Z",
        },
        {
          creator: "mehrdada",
          title:
            "Google's Top Quantum Scientist Explains in Detail Why He Resigned",
          link:
            "https://www.forbes.com/sites/moorinsights/2020/04/30/googles-top-quantum-scientist-explains-in-detail-why-he-resigned/#2c3cca576983",
          pubDate: "Fri, 03 Jul 2020 06:33:39 +0000",
          "dc:creator": "mehrdada",
          comments: "https://news.ycombinator.com/item?id=23721569",
          content:
            '\n<p>Article URL: <a href="https://www.forbes.com/sites/moorinsights/2020/04/30/googles-top-quantum-scientist-explains-in-detail-why-he-resigned/#2c3cca576983">https://www.forbes.com/sites/moorinsights/2020/04/30/googles-top-quantum-scientist-explains-in-detail-why-he-resigned/#2c3cca576983</a></p>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721569">https://news.ycombinator.com/item?id=23721569</a></p>\n<p>Points: 1</p>\n<p># Comments: 0</p>\n',
          contentSnippet:
            "Article URL: https://www.forbes.com/sites/moorinsights/2020/04/30/googles-top-quantum-scientist-explains-in-detail-why-he-resigned/#2c3cca576983\nComments URL: https://news.ycombinator.com/item?id=23721569\nPoints: 1\n# Comments: 0",
          guid: "https://news.ycombinator.com/item?id=23721569",
          isoDate: "2020-07-03T06:33:39.000Z",
        },
        {
          creator: "todsacerdoti",
          title: "Guietta – Python module to create simple GUIs",
          link: "https://github.com/alfiopuglisi/guietta",
          pubDate: "Fri, 03 Jul 2020 06:28:44 +0000",
          "dc:creator": "todsacerdoti",
          comments: "https://news.ycombinator.com/item?id=23721548",
          content:
            '\n<p>Article URL: <a href="https://github.com/alfiopuglisi/guietta">https://github.com/alfiopuglisi/guietta</a></p>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721548">https://news.ycombinator.com/item?id=23721548</a></p>\n<p>Points: 2</p>\n<p># Comments: 0</p>\n',
          contentSnippet:
            "Article URL: https://github.com/alfiopuglisi/guietta\nComments URL: https://news.ycombinator.com/item?id=23721548\nPoints: 2\n# Comments: 0",
          guid: "https://news.ycombinator.com/item?id=23721548",
          isoDate: "2020-07-03T06:28:44.000Z",
        },
        {
          creator: "Illniyar",
          title: "Study confirms new version of coronavirus spreads faster",
          link:
            "https://edition.cnn.com/2020/07/02/health/coronavirus-mutation-spread-study/index.html",
          pubDate: "Fri, 03 Jul 2020 06:28:30 +0000",
          "dc:creator": "Illniyar",
          comments: "https://news.ycombinator.com/item?id=23721547",
          content:
            '\n<p>Article URL: <a href="https://edition.cnn.com/2020/07/02/health/coronavirus-mutation-spread-study/index.html">https://edition.cnn.com/2020/07/02/health/coronavirus-mutation-spread-study/index.html</a></p>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721547">https://news.ycombinator.com/item?id=23721547</a></p>\n<p>Points: 2</p>\n<p># Comments: 0</p>\n',
          contentSnippet:
            "Article URL: https://edition.cnn.com/2020/07/02/health/coronavirus-mutation-spread-study/index.html\nComments URL: https://news.ycombinator.com/item?id=23721547\nPoints: 2\n# Comments: 0",
          guid: "https://news.ycombinator.com/item?id=23721547",
          isoDate: "2020-07-03T06:28:30.000Z",
        },
        {
          creator: "_chrischae",
          title: "Automating UX design process using Pixelic",
          link: "https://blog.pixelic.io/automating-ux-design-process/",
          pubDate: "Fri, 03 Jul 2020 06:23:12 +0000",
          "dc:creator": "_chrischae",
          comments: "https://news.ycombinator.com/item?id=23721524",
          content:
            '\n<p>Article URL: <a href="https://blog.pixelic.io/automating-ux-design-process/">https://blog.pixelic.io/automating-ux-design-process/</a></p>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721524">https://news.ycombinator.com/item?id=23721524</a></p>\n<p>Points: 3</p>\n<p># Comments: 1</p>\n',
          contentSnippet:
            "Article URL: https://blog.pixelic.io/automating-ux-design-process/\nComments URL: https://news.ycombinator.com/item?id=23721524\nPoints: 3\n# Comments: 1",
          guid: "https://news.ycombinator.com/item?id=23721524",
          isoDate: "2020-07-03T06:23:12.000Z",
        },
        {
          creator: "AndrewBissell",
          title:
            "SF MUNI expects to lose the majority of its lines permanently",
          link:
            "https://www.sfchronicle.com/bayarea/article/Muni-will-lose-the-majority-of-its-bus-lines-15383544.php",
          pubDate: "Fri, 03 Jul 2020 06:22:56 +0000",
          "dc:creator": "AndrewBissell",
          comments: "https://news.ycombinator.com/item?id=23721522",
          content:
            '\n<p>Article URL: <a href="https://www.sfchronicle.com/bayarea/article/Muni-will-lose-the-majority-of-its-bus-lines-15383544.php">https://www.sfchronicle.com/bayarea/article/Muni-will-lose-the-majority-of-its-bus-lines-15383544.php</a></p>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721522">https://news.ycombinator.com/item?id=23721522</a></p>\n<p>Points: 3</p>\n<p># Comments: 1</p>\n',
          contentSnippet:
            "Article URL: https://www.sfchronicle.com/bayarea/article/Muni-will-lose-the-majority-of-its-bus-lines-15383544.php\nComments URL: https://news.ycombinator.com/item?id=23721522\nPoints: 3\n# Comments: 1",
          guid: "https://news.ycombinator.com/item?id=23721522",
          isoDate: "2020-07-03T06:22:56.000Z",
        },
        {
          creator: "jdnier",
          title:
            "A ‘Cure for Heart Disease’? A Single Shot Succeeds in Monkeys",
          link:
            "https://www.nytimes.com/2020/06/27/health/heart-disease-gene-editing.html",
          pubDate: "Fri, 03 Jul 2020 06:22:37 +0000",
          "dc:creator": "jdnier",
          comments: "https://news.ycombinator.com/item?id=23721520",
          content:
            '\n<p>Article URL: <a href="https://www.nytimes.com/2020/06/27/health/heart-disease-gene-editing.html">https://www.nytimes.com/2020/06/27/health/heart-disease-gene-editing.html</a></p>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721520">https://news.ycombinator.com/item?id=23721520</a></p>\n<p>Points: 3</p>\n<p># Comments: 0</p>\n',
          contentSnippet:
            "Article URL: https://www.nytimes.com/2020/06/27/health/heart-disease-gene-editing.html\nComments URL: https://news.ycombinator.com/item?id=23721520\nPoints: 3\n# Comments: 0",
          guid: "https://news.ycombinator.com/item?id=23721520",
          isoDate: "2020-07-03T06:22:37.000Z",
        },
        {
          creator: "1_player",
          title: "What's wrong with WhatsApp",
          link:
            "https://www.theguardian.com/technology/2020/jul/02/whatsapp-groups-conspiracy-theories-disinformation-democracy",
          pubDate: "Fri, 03 Jul 2020 06:22:35 +0000",
          "dc:creator": "1_player",
          comments: "https://news.ycombinator.com/item?id=23721518",
          content:
            '\n<p>Article URL: <a href="https://www.theguardian.com/technology/2020/jul/02/whatsapp-groups-conspiracy-theories-disinformation-democracy">https://www.theguardian.com/technology/2020/jul/02/whatsapp-groups-conspiracy-theories-disinformation-democracy</a></p>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721518">https://news.ycombinator.com/item?id=23721518</a></p>\n<p>Points: 1</p>\n<p># Comments: 0</p>\n',
          contentSnippet:
            "Article URL: https://www.theguardian.com/technology/2020/jul/02/whatsapp-groups-conspiracy-theories-disinformation-democracy\nComments URL: https://news.ycombinator.com/item?id=23721518\nPoints: 1\n# Comments: 0",
          guid: "https://news.ycombinator.com/item?id=23721518",
          isoDate: "2020-07-03T06:22:35.000Z",
        },
        {
          creator: "VitalyAnkh",
          title: "React core team discussing re-writing internals in Rust",
          link: "https://twitter.com/benadam11/status/1278731337906569216",
          pubDate: "Fri, 03 Jul 2020 06:21:08 +0000",
          "dc:creator": "VitalyAnkh",
          comments: "https://news.ycombinator.com/item?id=23721511",
          content:
            '\n<p>Article URL: <a href="https://twitter.com/benadam11/status/1278731337906569216">https://twitter.com/benadam11/status/1278731337906569216</a></p>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721511">https://news.ycombinator.com/item?id=23721511</a></p>\n<p>Points: 2</p>\n<p># Comments: 0</p>\n',
          contentSnippet:
            "Article URL: https://twitter.com/benadam11/status/1278731337906569216\nComments URL: https://news.ycombinator.com/item?id=23721511\nPoints: 2\n# Comments: 0",
          guid: "https://news.ycombinator.com/item?id=23721511",
          isoDate: "2020-07-03T06:21:08.000Z",
        },
        {
          creator: "dcgudeman",
          title: "Gnome Shell and Mutter: Splitting Up the Frame Clock",
          link:
            "https://blogs.gnome.org/shell-dev/2020/07/02/splitting-up-the-frame-clock/",
          pubDate: "Fri, 03 Jul 2020 06:18:24 +0000",
          "dc:creator": "dcgudeman",
          comments: "https://news.ycombinator.com/item?id=23721489",
          content:
            '\n<p>Article URL: <a href="https://blogs.gnome.org/shell-dev/2020/07/02/splitting-up-the-frame-clock/">https://blogs.gnome.org/shell-dev/2020/07/02/splitting-up-the-frame-clock/</a></p>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721489">https://news.ycombinator.com/item?id=23721489</a></p>\n<p>Points: 2</p>\n<p># Comments: 0</p>\n',
          contentSnippet:
            "Article URL: https://blogs.gnome.org/shell-dev/2020/07/02/splitting-up-the-frame-clock/\nComments URL: https://news.ycombinator.com/item?id=23721489\nPoints: 2\n# Comments: 0",
          guid: "https://news.ycombinator.com/item?id=23721489",
          isoDate: "2020-07-03T06:18:24.000Z",
        },
        {
          creator: "amitness",
          title: "Visualizing Moods with an EmojiCloud",
          link:
            "https://medium.com/nexxt-intelligence-engineering/visualizing-moods-with-an-emojicloud-7e6ece5cf327",
          pubDate: "Fri, 03 Jul 2020 06:18:22 +0000",
          "dc:creator": "amitness",
          comments: "https://news.ycombinator.com/item?id=23721488",
          content:
            '\n<p>Article URL: <a href="https://medium.com/nexxt-intelligence-engineering/visualizing-moods-with-an-emojicloud-7e6ece5cf327">https://medium.com/nexxt-intelligence-engineering/visualizing-moods-with-an-emojicloud-7e6ece5cf327</a></p>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721488">https://news.ycombinator.com/item?id=23721488</a></p>\n<p>Points: 1</p>\n<p># Comments: 0</p>\n',
          contentSnippet:
            "Article URL: https://medium.com/nexxt-intelligence-engineering/visualizing-moods-with-an-emojicloud-7e6ece5cf327\nComments URL: https://news.ycombinator.com/item?id=23721488\nPoints: 1\n# Comments: 0",
          guid: "https://news.ycombinator.com/item?id=23721488",
          isoDate: "2020-07-03T06:18:22.000Z",
        },
        {
          creator: "javialliere",
          title: "Is It Time To Talk More ABout KETO CLEANSE PRO?",
          link: "https://news.ycombinator.com/item?id=23721482",
          pubDate: "Fri, 03 Jul 2020 06:17:35 +0000",
          "dc:creator": "javialliere",
          comments: "https://news.ycombinator.com/item?id=23721482",
          content:
            "\n<p>Keto Cleanse Pro<p>Not in any capacity !!! As this weight decrease supplement depicts its ability that it is contained totally standard fixings and doesn't impacts your body. There is no indication since this best weight decrease supplement has its regular establishment. The productivity of this standard weight decrease supplement makes it buyable and significant. Keto Cleanse Pro is far away from any terrible effect on any one's body and never harms you. Thusly, without consuming at whatever point hookup this weight decrease supplement for you and solicitation it now!!Keto Genix Pro – Whenever you take a gander at superstars or models, you take a full breath since you wish to turn out to be much the same as them. They appear to be flawless in each perspective since they are exquisite, they are alluring and in particular, they are fit. On the off chance that you need to resemble them, at that point you need to concentrate on your eating routine and you need to concentrate on your way of life. You will be amazed to realize that the greater part of the day is spent for the support of their own bodies. They deal with their eating routine and they don't take superfluous or shoddy nourishments.<p>https://buddysupplement.com/keto-cleanse-pro/<p>https://www.youtube.com/watch?v=vMaYlMdEwBc&feature=youtu.be</p>\n<hr>\n<p>Comments URL: <a href=\"https://news.ycombinator.com/item?id=23721482\">https://news.ycombinator.com/item?id=23721482</a></p>\n<p>Points: 1</p>\n<p># Comments: 1</p>\n",
          contentSnippet:
            "Keto Cleanse ProNot in any capacity !!! As this weight decrease supplement depicts its ability that it is contained totally standard fixings and doesn't impacts your body. There is no indication since this best weight decrease supplement has its regular establishment. The productivity of this standard weight decrease supplement makes it buyable and significant. Keto Cleanse Pro is far away from any terrible effect on any one's body and never harms you. Thusly, without consuming at whatever point hookup this weight decrease supplement for you and solicitation it now!!Keto Genix Pro – Whenever you take a gander at superstars or models, you take a full breath since you wish to turn out to be much the same as them. They appear to be flawless in each perspective since they are exquisite, they are alluring and in particular, they are fit. On the off chance that you need to resemble them, at that point you need to concentrate on your eating routine and you need to concentrate on your way of life. You will be amazed to realize that the greater part of the day is spent for the support of their own bodies. They deal with their eating routine and they don't take superfluous or shoddy nourishments.https://buddysupplement.com/keto-cleanse-pro/https://www.youtube.com/watch?v=vMaYlMdEwBc&feature=youtu.be\n\nComments URL: https://news.ycombinator.com/item?id=23721482\nPoints: 1\n# Comments: 1",
          guid: "https://news.ycombinator.com/item?id=23721482",
          isoDate: "2020-07-03T06:17:35.000Z",
        },
        {
          creator: "sohkamyung",
          title: "HTTPS Requests to Any URL Using the ESP8266",
          link:
            "https://maakbaas.com/esp8266-iot-framework/logs/https-requests/",
          pubDate: "Fri, 03 Jul 2020 06:14:56 +0000",
          "dc:creator": "sohkamyung",
          comments: "https://news.ycombinator.com/item?id=23721470",
          content:
            '\n<p>Article URL: <a href="https://maakbaas.com/esp8266-iot-framework/logs/https-requests/">https://maakbaas.com/esp8266-iot-framework/logs/https-requests/</a></p>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721470">https://news.ycombinator.com/item?id=23721470</a></p>\n<p>Points: 2</p>\n<p># Comments: 0</p>\n',
          contentSnippet:
            "Article URL: https://maakbaas.com/esp8266-iot-framework/logs/https-requests/\nComments URL: https://news.ycombinator.com/item?id=23721470\nPoints: 2\n# Comments: 0",
          guid: "https://news.ycombinator.com/item?id=23721470",
          isoDate: "2020-07-03T06:14:56.000Z",
        },
        {
          creator: "allenleein",
          title: "The Notetaking Cold War",
          link:
            "https://superorganizers.substack.com/p/the-notetaking-cold-war-c7d",
          pubDate: "Fri, 03 Jul 2020 06:13:43 +0000",
          "dc:creator": "allenleein",
          comments: "https://news.ycombinator.com/item?id=23721466",
          content:
            '\n<p>Article URL: <a href="https://superorganizers.substack.com/p/the-notetaking-cold-war-c7d">https://superorganizers.substack.com/p/the-notetaking-cold-war-c7d</a></p>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721466">https://news.ycombinator.com/item?id=23721466</a></p>\n<p>Points: 2</p>\n<p># Comments: 0</p>\n',
          contentSnippet:
            "Article URL: https://superorganizers.substack.com/p/the-notetaking-cold-war-c7d\nComments URL: https://news.ycombinator.com/item?id=23721466\nPoints: 2\n# Comments: 0",
          guid: "https://news.ycombinator.com/item?id=23721466",
          isoDate: "2020-07-03T06:13:43.000Z",
        },
        {
          creator: "gdubs",
          title: "The Week America Lost Control of the Pandemic",
          link:
            "https://www.theatlantic.com/science/archive/2020/07/week-america-lost-control-pandemic/613831/",
          pubDate: "Fri, 03 Jul 2020 06:11:01 +0000",
          "dc:creator": "gdubs",
          comments: "https://news.ycombinator.com/item?id=23721455",
          content:
            '\n<p>Article URL: <a href="https://www.theatlantic.com/science/archive/2020/07/week-america-lost-control-pandemic/613831/">https://www.theatlantic.com/science/archive/2020/07/week-america-lost-control-pandemic/613831/</a></p>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721455">https://news.ycombinator.com/item?id=23721455</a></p>\n<p>Points: 5</p>\n<p># Comments: 0</p>\n',
          contentSnippet:
            "Article URL: https://www.theatlantic.com/science/archive/2020/07/week-america-lost-control-pandemic/613831/\nComments URL: https://news.ycombinator.com/item?id=23721455\nPoints: 5\n# Comments: 0",
          guid: "https://news.ycombinator.com/item?id=23721455",
          isoDate: "2020-07-03T06:11:01.000Z",
        },
        {
          creator: "NaijTecho",
          title:
            "Complete Guide on How to Disable Windows Defender (Windows 10)",
          link:
            "https://www.naijtecho.com.ng/2020/06/how-to-disable-windows-defender.html?m=1",
          pubDate: "Fri, 03 Jul 2020 06:10:50 +0000",
          "dc:creator": "NaijTecho",
          comments: "https://news.ycombinator.com/item?id=23721454",
          content:
            '\n<p>Article URL: <a href="https://www.naijtecho.com.ng/2020/06/how-to-disable-windows-defender.html?m=1">https://www.naijtecho.com.ng/2020/06/how-to-disable-windows-defender.html?m=1</a></p>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721454">https://news.ycombinator.com/item?id=23721454</a></p>\n<p>Points: 2</p>\n<p># Comments: 0</p>\n',
          contentSnippet:
            "Article URL: https://www.naijtecho.com.ng/2020/06/how-to-disable-windows-defender.html?m=1\nComments URL: https://news.ycombinator.com/item?id=23721454\nPoints: 2\n# Comments: 0",
          guid: "https://news.ycombinator.com/item?id=23721454",
          isoDate: "2020-07-03T06:10:50.000Z",
        },
        {
          creator: "NaijTecho",
          title:
            "Step by Step Guide on How to Encrypt Your Flash Drive Using Bitlocker",
          link:
            "https://www.naijtecho.com.ng/2020/06/how-to-encrypt-your-flash-drive.html?m=1",
          pubDate: "Fri, 03 Jul 2020 06:09:48 +0000",
          "dc:creator": "NaijTecho",
          comments: "https://news.ycombinator.com/item?id=23721451",
          content:
            '\n<p>Article URL: <a href="https://www.naijtecho.com.ng/2020/06/how-to-encrypt-your-flash-drive.html?m=1">https://www.naijtecho.com.ng/2020/06/how-to-encrypt-your-flash-drive.html?m=1</a></p>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721451">https://news.ycombinator.com/item?id=23721451</a></p>\n<p>Points: 2</p>\n<p># Comments: 0</p>\n',
          contentSnippet:
            "Article URL: https://www.naijtecho.com.ng/2020/06/how-to-encrypt-your-flash-drive.html?m=1\nComments URL: https://news.ycombinator.com/item?id=23721451\nPoints: 2\n# Comments: 0",
          guid: "https://news.ycombinator.com/item?id=23721451",
          isoDate: "2020-07-03T06:09:48.000Z",
        },
        {
          creator: "tomp",
          title: "There’s a War Going on over Kamala Harris’s Wikipedia Page",
          link: "https://theintercept.com/2020/07/02/kamala-harris-wikipedia/",
          pubDate: "Fri, 03 Jul 2020 06:08:51 +0000",
          "dc:creator": "tomp",
          comments: "https://news.ycombinator.com/item?id=23721446",
          content:
            '\n<p>Article URL: <a href="https://theintercept.com/2020/07/02/kamala-harris-wikipedia/">https://theintercept.com/2020/07/02/kamala-harris-wikipedia/</a></p>\n<p>Comments URL: <a href="https://news.ycombinator.com/item?id=23721446">https://news.ycombinator.com/item?id=23721446</a></p>\n<p>Points: 2</p>\n<p># Comments: 0</p>\n',
          contentSnippet:
            "Article URL: https://theintercept.com/2020/07/02/kamala-harris-wikipedia/\nComments URL: https://news.ycombinator.com/item?id=23721446\nPoints: 2\n# Comments: 0",
          guid: "https://news.ycombinator.com/item?id=23721446",
          isoDate: "2020-07-03T06:08:51.000Z",
        },
      ],
      feedUrl: "https://hnrss.org/newest",
      title: "Hacker News: Newest",
      description: "Hacker News RSS",
      generator: "go-hnrss v1.0-10-g4f1b850",
      link: "https://news.ycombinator.com/newest",
      lastBuildDate: "Fri, 03 Jul 2020 06:38:28 +0000",
      docs: "https://hnrss.org/",
    },
    url: "https://hnrss.org/newest",
    request: {
      processing: false,
      success: true,
      error: null,
    },
  },
});
