

const database = [
	{
		"id": "9",
		"tool": " hydra",
		"description": "Attempt to login as the root user (-l root) using a password list (-P /usr/share/wordlists/metasploit/unix_passwords.txt) with 6 threads (-t 6) on the given SSH server (ssh://192.168.1.123):Read in a list of passwords (-i /usr/share/wordlists/nmap.lst) and save to a file (-o /root/passes.txt), selecting passwords of a minimum length of 6 (-m 6) and a maximum length of 10 (-M 10):Hydra is a parallelized login cracker which supports numerous protocols to attack. It is very fast and flexible, and new modules are easy to add.This tool makes it possible for researchers and security consultants to show how easy it would be to gain unauthorized access to a system remotely.It supports: Cisco AAA, Cisco auth, Cisco enable, CVS, FTP, HTTP(S)-FORM-GET, HTTP(S)-FORM-POST, HTTP(S)-GET, HTTP(S)-HEAD, HTTP-Proxy, ICQ, IMAP, IRC, LDAP, MS-SQL, MySQL, NNTP, Oracle Listener, Oracle SID, PC-Anywhere, PC-NFS, POP3, PostgreSQL, RDP, Rexec, Rlogin, Rsh, SIP, SMB(NT), SMTP, SMTP Enum, SNMP v1+v2+v3, SOCKS5, SSH (v1 and v2), SSHKEY, Subversion, Teamspeak (TS2), Telnet, VMware-Auth, VNC and XMPP.Installed size: 956 KBHow to install: sudo apt install hydraGenerates a (d)efault (p)assword (l)ist as input for THC hydraA very fast network logon cracker which supports many different servicesWizard to use hydra from command lineA tool to reduce the password listHydra is a parallelized login cracker which supports numerous protocols to attack. It is very fast and flexible, and new modules are easy to add.This tool makes it possible for researchers and security consultants to show how easy it would be to gain unauthorized access to a system remotely.It supports: Cisco AAA, Cisco auth, Cisco enable, CVS, FTP, HTTP(S)-FORM-GET, HTTP(S)-FORM-POST, HTTP(S)-GET, HTTP(S)-HEAD, HTTP-Proxy, ICQ, IMAP, IRC, LDAP, MS-SQL, MySQL, NNTP, Oracle Listener, Oracle SID, PC-Anywhere, PC-NFS, POP3, PostgreSQL, RDP, Rexec, Rlogin, Rsh, SIP, SMB(NT), SMTP, SMTP Enum, SNMP v1+v2+v3, SOCKS5, SSH (v1 and v2), SSHKEY, Subversion, Teamspeak (TS2), Telnet, VMware-Auth, VNC and XMPP.This package provides the GTK+ based GUI for hydra.Installed size: 107 KBHow to install: sudo apt install hydra-gtkGtk+2 frontend for thc-hydraUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/hydra/"
	},

	{
		"id": "17",
		"tool": " metasploit",
		"description": "One of the best sources of information on using the Metasploit Framework is Metasploit Unleashed, a free online course created by Offensive Security. Metasploit Unleashed guides you from the absolute basics of Metasploit all the way through to advanced topics.The Metasploit Framework is an open source platform that supports vulnerability research, exploit development, and the creation of custom security tools.Installed size: 456.18 MBHow to install: sudo apt install metasploit-frameworkMetasploit Framework ConsolePayload Generator and EncoderUpdated on: 2022-Nov-24",
		"url": "https://www.kali.org/tools/metasploit-framework/"
	},

	{
		"id": "42",
		"tool": " sqlmap",
		"description": "Attack the given URL (-u “http://192.168.1.250/?p=1&forumaction=search”) and extract the database names (–dbs):sqlmap goal is to detect and take advantage of SQL injection vulnerabilities in web applications. Once it detects one or more SQL injections on the target host, the user can choose among a variety of options to perform an extensive back-end database management system fingerprint, retrieve DBMS session user and database, enumerate users, password hashes, privileges, databases, dump entire or user’s specific DBMS tables/columns, run his own SQL statement, read specific files on the file system and more.Installed size: 10.51 MBHow to install: sudo apt install sqlmapAutomatic SQL injection toolAutomatic SQL injection tool, api serverUpdated on: 2022-Nov-24",
		"url": "https://www.kali.org/tools/sqlmap/"
	},

	{
		"id": "45",
		"tool": " gobuster ",
		"description": "Scan a website (-u http://192.168.0.155/) for directories using a wordlist (-w /usr/share/wordlists/dirb/common.txt) and print the full URLs of discovered paths (-e):Gobuster is a tool used to brute-force URIs including directories and files as well as DNS subdomains.Installed size: 7.43 MBHow to install: sudo apt install gobusterUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/gobuster/"
	},
	{
		"id": "77",
		"tool": " sherlock ",
		"description": "This package contains a tool to find usernames across social networks.Installed size: 175 KBHow to install: sudo apt install sherlockUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/sherlock/"
	},

	{
		"id": "78",
		"tool": " cewl",
		"description": "Scan to a depth of 2 (-d 2) and use a minimum word length of 5 (-m 5), save the words to a file (-w docswords.txt), targeting the given URL (https://example.com):CeWL (Custom Word List generator) is a ruby app which spiders a given URL, up to a specified depth, and returns a list of words which can then be used for password crackers such as John the Ripper. Optionally, CeWL can follow external links.CeWL can also create a list of email addresses found in mailto links. These email addresses can be used as usernames in brute force actions.Another tool provided by CeWL project is FAB (Files Already Bagged). FAB extracts the content of the author/creator fields, from metadata of the some files, to create lists of possible usernames. These usernames can be used in association with the password list generated by CeWL. FAB uses the same metadata extraction techniques that CeWL. Currently, FAB process Office pre 2007, Office 2007 and PDF formats.CeWL is useful in security tests and forensics investigations. CeWL is pronounced “cool”.Installed size: 80 KBHow to install: sudo apt install cewlCustom word list generatorExtract metadata from filesUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/cewl/"
	},
	{
		"id": "110",
		"tool": " wpscan ",
		"description": "Scan a target WordPress URL and enumerate any plugins that are installed:WPScan scans remote WordPress installations to find security issues.Installed size: 394 KBHow to install: sudo apt install wpscanWordPress Security ScannerUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/wpscan/"
	},

	{
		"id": "111",
		"tool": " dirbuster ",
		"description": "DirBuster is a multi threaded java application designed to brute force directories and files names on web/application servers. Often is the case now of what looks like a web server in a state of default installation is actually not, and has pages and applications hidden within. DirBuster attempts to find these.However tools of this nature are often as only good as the directory and file list they come with. A different approach was taken to generating this. The list was generated from scratch, by crawling the Internet and collecting the directory and files that are actually used by developers! DirBuster comes a total of 9 different lists, this makes DirBuster extremely effective at finding those hidden files and directories. And if that was not enough DirBuster also has the option to perform a pure brute force, which leaves the hidden directories and files nowhere to hide.Installed size: 10.75 MBHow to install: sudo apt install dirbusterUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/dirbuster/"
	},

	{
		"id": "112",
		"tool": " wifite ",
		"description": "Attack access points with over 50 dB of power (-pow 50) using the WPS attack (-wps):Wifite is a tool to audit WEP or WPA encrypted wireless networks. It uses aircrack-ng, pyrit, reaver, tshark tools to perform the audit.This tool is customizable to be automated with only a few arguments and can be trusted to run without supervision.Installed size: 2.34 MBHow to install: sudo apt install wifitePython script to automate wireless auditing using aircrack-ng toolsUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/wifite/"
	},

	{
		"id": "113",
		"tool": " dirb",
		"description": "Scan the web server (http://192.168.1.224/) for directories using a dictionary file (/usr/share/wordlists/dirb/common.txt):DIRB is a Web Content Scanner. It looks for existing (and/or hidden) Web Objects. It basically works by launching a dictionary based attack against a web server and analyzing the responses.DIRB comes with a set of preconfigured attack wordlists for easy usage but you can use your custom wordlists. Also DIRB sometimes can be used as a classic CGI scanner, but remember that it is a content scanner not a vulnerability scanner.DIRB’s main purpose is to help in professional web application auditing. Specially in security related testing. It covers some holes not covered by classic web vulnerability scanners. DIRB looks for specific web objects that other generic CGI scanners can’t look for. It doesn’t search vulnerabilities nor does it look for web contents that can be vulnerable.Installed size: 1.43 MBHow to install: sudo apt install dirbWeb Content ScannerGenerate dictionary incrementallyDump word dictionary from html input fileUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/dirb/"
	},

	{
		"id": "117",
		"tool": " maltego ",
		"description": "Maltego is an open source intelligence and forensics application. It will offer you timous mining and gathering of information as well as the representation of this information in a easy to understand format.This package replaces previous packages matlegoce and casefile.Installed size: 217.90 MBHow to install: sudo apt install maltegoUpdated on: 2022-Nov-24",
		"url": "https://www.kali.org/tools/maltego/"
	},

	{
		"id": "118",
		"tool": " wordlists ",
		"description": "This package contains the rockyou.txt wordlist and has an installation size of 134 MB.Installed size: 50.90 MBHow to install: sudo apt install wordlistsUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/wordlists/"
	},

	{
		"id": "119",
		"tool": " ettercap",
		"description": "Ettercap supports active and passive dissection of many protocols (even encrypted ones) and includes many feature for network and host analysis.Data injection in an established connection and filtering (substitute or drop a packet) on the fly is also possible, keeping the connection synchronized.Many sniffing modes are implemented, for a powerful and complete sniffing suite. It is possible to sniff in four modes: IP Based, MAC Based, ARP Based (full-duplex) and PublicARP Based (half-duplex).Ettercap also has the ability to detect a switched LAN, and to use OS fingerprints (active or passive) to find the geometry of the LAN.This package contains the Common support files, configuration files, plugins, and documentation. You must also install either ettercap-graphical or ettercap-text-only for the actual GUI-enabled or text-only ettercap executable, respectively.Installed size: 2.45 MBHow to install: sudo apt install ettercap-commonEttercap supports active and passive dissection of many protocols (even encrypted ones) and includes many feature for network and host analysis.Data injection in an established connection and filtering (substitute or drop a packet) on the fly is also possible, keeping the connection synchronized.Many sniffing modes are implemented, for a powerful and complete sniffing suite. It is possible to sniff in four modes: IP Based, MAC Based, ARP Based (full-duplex) and PublicARP Based (half-duplex).Ettercap also has the ability to detect a switched LAN, and to use OS fingerprints (active or passive) to find the geometry of the LAN.This package contains the ettercap GUI-enabled executable.Installed size: 605 KBHow to install: sudo apt install ettercap-graphicalMultipurpose sniffer/content filter for man in the middle attacksGraphical pkexec-based launcher for ettercapFilter compiler for ettercap content filtering engineLog analyzer for ettercap log filesEttercap supports active and passive dissection of many protocols (even encrypted ones) and includes many feature for network and host analysis.Data injection in an established connection and filtering (substitute or drop a packet) on the fly is also possible, keeping the connection synchronized.Many sniffing modes are implemented, for a powerful and complete sniffing suite. It is possible to sniff in four modes: IP Based, MAC Based, ARP Based (full-duplex) and PublicARP Based (half-duplex).Ettercap also has the ability to detect a switched LAN, and to use OS fingerprints (active or passive) to find the geometry of the LAN.This package contains the ettercap text-mode-only executable.Installed size: 304 KBHow to install: sudo apt install ettercap-text-onlyMultipurpose sniffer/content filter for man in the middle attacksFilter compiler for ettercap content filtering engineLog analyzer for ettercap log filesUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/ettercap/"
	},

	{
		"id": "130",
		"tool": " beef-xss",
		"description": "BeEF is short for The Browser Exploitation Framework. It is a penetration testing tool that focuses on the web browser.Amid growing concerns about web-born attacks against clients, including mobile clients, BeEF allows the professional penetration tester to assess the actual security posture of a target environment by using client-side attack vectors. Unlike other security frameworks, BeEF looks past the hardened network perimeter and client system, and examines exploitability within the context of the one open door: the web browser. BeEF will hook one or more web browsers and use them as beachheads for launching directed command modules and further attacks against the system from within the browser context.Installed size: 19.74 MBHow to install: sudo apt install beef-xssUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/beef-xss/"
	},

	{
		"id": "133",
		"tool": " tcpdump ",
		"description": "This program allows you to dump the traffic on a network. tcpdump is able to examine IPv4, ICMPv4, IPv6, ICMPv6, UDP, TCP, SNMP, AFS BGP, RIP, PIM, DVMRP, IGMP, SMB, OSPF, NFS and many other packet types.It can be used to print out the headers of packets on a network interface, filter packets that match a certain expression. You can use this tool to track down network problems, to detect attacks or to monitor network activities.Installed size: 1.30 MBHow to install: sudo apt install tcpdumpDump traffic on a networkUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/tcpdump/"
	},

	{
		"id": "134",
		"tool": " subfinder ",
		"description": "This package contains a subdomain discovery tool that discovers valid subdomains for websites by using passive online sources. It has a simple modular architecture and is optimized for speed. subfinder is built for doing one thing only - passive subdomain enumeration, and it does that very well.Installed size: 9.62 MBHow to install: sudo apt install subfinderUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/subfinder/"
	},

	{
		"id": "135",
		"tool": " crunch ",
		"description": "Generate a dictionary file containing words with a minimum and maximum length of 6 (6 6) using the given characters (0123456789abcdef), saving the output to a file (-0 6chars.txt):Crunch is a wordlist generator where you can specify a standard character set or any set of characters to be used in generating the wordlists. The wordlists are created through combination and permutation of a set of characters. You can determine the amount of characters and list size.This program supports numbers and symbols, upper and lower case characters separately and Unicode.Installed size: 83 KBHow to install: sudo apt install crunchGenerate wordlists from a character setUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/crunch/"
	},

	{
		"id": "136",
		"tool": " hashcat",
		"description": "Run a benchmark test on all supported hash types to determine cracking speed:Use md5crypt mode (-m 500) to cracking the sample hash (example500.hash) with the provided wordlist (/usr/share/wordlists/sqlmap.txt):Hashcat supports five unique modes of attack for over 300 highly-optimized hashing algorithms. hashcat currently supports CPUs, GPUs, and other hardware accelerators on Linux, and has facilities to help enable distributed password cracking.Examples of hashcat supported hashing algorithms are: MD5, HMAC-MD5, SHA1, HMAC-SHA1, MySQL323, MySQL4.1/MySQL5, phpass, MD5(Wordpress), MD5(phpBB3), MD5(Joomla), md5crypt, MD5(Unix), FreeBSD MD5, Cisco-IOS, MD4, NTLM, Domain Cached Credentials (DCC), MS Cache, SHA256, HMAC-SHA256, md5apr1, MD5(APR), Apache MD5, SHA512, HMAC-SHA512, Cisco-PIX, Cisco-ASA, WPA/WPA2, Double MD5, bcrypt, Blowfish(OpenBSD), MD5(Sun), Double SHA1, SHA-3(Keccak),Half MD5, Password Safe SHA-256, IKE-PSK MD5, IKE-PSK SHA1, NetNTLMv1-VANILLA/NetNTLMv1-ESS, NetNTLMv2, Cisco-IOS SHA256, Android PIN, AIX {smd5}, AIX {ssha256}, AIX {ssha512}, AIX {ssha1}, GOST, GOST R 34, Fortigate (FortiOS), OS X v10.8+, GRUB 2, IPMI2, RAKP, HMAC-SHA1, sha256crypt, SHA256(Unix), Drupal7, WBB3, scrypt, Cisco 8, Cisco 9, Radmin2, Django (PBKDF2-SHA256), Cram MD5, SAP, iSSHA-1, PrestaShop, PostgreSQL, Challenge-Response Authentication (MD5), MySQL Challenge-Response, Authentication (SHA1), SIP digest authentication (MD5), Plaintext, Joomla < 2.5.18, PostgreSQL, osCommerce, xt:Commerce, Skype, nsldap, Netscape, LDAP, nsldaps, SSHA-1(Base64), Oracle S: Type (Oracle 11+), SMF > v1.1, OS X v10.4, v10.5, v10.6, EPi, Django (SHA-1), MSSQL(2000), MSSQL(2005), PeopleSoft, EPiServer 6.x < v4, hMailServer, SSHA-512(Base64), LDAP {SSHA512}, OS X v10.7, MSSQL(2012 & 2014), vBulletin < v3.8.5, PHPS, vBulletin > v3.8.5, IPB2+, MyBB1.2+, Mediawiki B type, WebEdition CMS, Redmine.Hashcat offers multiple attack modes for obtaining effective and complex coverage over a hash’s keyspace. These modes are:Installed size: 80.48 MBHow to install: sudo apt install hashcatAdvanced CPU-based password recovery utilityHashcat is an advanced CPU/GPU-based password recovery utility supporting seven unique modes of attack for over 100 optimized hashing algorithms.This package contains the data files for hashcat, including charsets, rules, salts, tables and Python tools.Installed size: 28.25 MBHow to install: sudo apt install hashcat-dataUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/hashcat/"
	},

	{
		"id": "140",
		"tool": " netcat ",
		"description": "A simple Unix utility which reads and writes data across network connections using TCP or UDP protocol. It is designed to be a reliable “back-end” tool that can be used directly or easily driven by other programs and scripts. At the same time it is a feature-rich network debugging and exploration tool, since it can create almost any kind of connection you would need and has several interesting built-in capabilities.This is the “classic” netcat, written by Hobbit. It lacks many features found in netcat-openbsd.Installed size: 143 KBHow to install: sudo apt install netcat-traditionalTCP/IP swiss army knifeUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/netcat/"
	},

	{
		"id": "141",
		"tool": " nikto",
		"description": "Nikto is a pluggable web server and CGI scanner written in Perl, using rfp’s LibWhisker to perform fast security or informational checks.Features:Installed size: 2.38 MBHow to install: sudo apt install niktoScan web server for known vulnerabilitiesUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/nikto/"
	},

	{
		"id": "144",
		"tool": " armitage",
		"description": "Start teamserver on the external IP (192.168.1.202) and set the server password (s3cr3t):Armitage is a scriptable red team collaboration tool for Metasploit that visualizes targets, recommends exploits, and exposes the advanced post- exploitation features in the framework.Installed size: 10.95 MBHow to install: sudo apt install armitageUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/armitage/"
	},

	{
		"id": "147",
		"tool": " testdisk",
		"description": "TestDisk checks the partition and boot sectors of your disks. It is very useful in forensics, recovering lost partitions. It works with :PhotoRec is file data recovery software designed to recover lost pictures from digital camera memory or even Hard Disks. It has been extended to search also for non audio/video headers. It searches for following files and is able to undelete them:Installed size: 1.37 MBHow to install: sudo apt install testdiskDetermine file type using PhotoRec databaseRecover lost files from harddisk, digital camera and cdromScan and repair disk partitionsUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/testdisk/"
	},

	{
		"id": "151",
		"tool": " hping3 ",
		"description": "Use traceroute mode (--traceroute), be verbose (-V) in ICMP mode (-1) against the target (www.example.com):hping3 is a network tool able to send custom ICMP/UDP/TCP packets and to display target replies like ping does with ICMP replies. It handles fragmentation and arbitrary packet body and size, and can be used to transfer files under supported protocols. Using hping3, you can test firewall rules, perform (spoofed) port scanning, test network performance using different protocols, do path MTU discovery, perform traceroute-like actions under different protocols, fingerprint remote operating systems, audit TCP/IP stacks, etc. hping3 is scriptable using the Tcl language.Installed size: 254 KBHow to install: sudo apt install hping3Send (almost) arbitrary TCP/IP packets to network hostsUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/hping3/"
	},

	{
		"id": "152",
		"tool": " goldeneye ",
		"description": "GoldenEye is a HTTP DoS Test Tool. This tool can be used to test if a site is susceptible to Deny of Service (DoS) attacks. Is possible to open several parallel connections against a URL to check if the web server can be compromised.The program tests the security in networks and uses ‘HTTP Keep AliveThis package is useful for pentesters.Installed size: 963 KBHow to install: sudo apt install goldeneyeHTTP DoS test toolUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/goldeneye/"
	},

	{
		"id": "153",
		"tool": " powershell",
		"description": "It consists of a cross-platform command-line shell and associated scripting language.Installed size: 182.63 MBHow to install: sudo apt install powershellPowerShell command-line shell and .NET REPLPowerShell command-line shell and .NET REPLUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/powershell/"
	},

	{
		"id": "156",
		"tool": " john",
		"description": "Using a wordlist (–wordlist=/usr/share/john/password.lst), apply mangling rules (–rules) and attempt to crack the password hashes in the given file (unshadowed.txt):Using verbose mode (-v), read a list of passwords (-inp=allwords.txt) and save only unique words to a file (uniques.txt):John the Ripper is a tool designed to help systems administrators to find weak (easy to guess or crack through brute force) passwords, and even automatically mail users warning them about it, if it is desired.Besides several crypt(3) password hash types most commonly found on various Unix flavors, supported out of the box are Kerberos AFS and Windows NT/2000/XP/2003 LM hashes, plus several more with contributed patches.Installed size: 77.31 MBHow to install: sudo apt install johnPart of SIPcrack, A suite of tools to sniff and crack the digest authentications within the SIP protocol.A tool to find weak passwords of your usersScript to warn users about their weak passwordsScript to warn users about their weak passwordsRemoves duplicates from a wordlistCombines passwd and shadow filesJohn the Ripper is a tool designed to help systems administrators to find weak (easy to guess or crack through brute force) passwords, and even automatically mail users warning them about it, if it is desired.This package contains architecture-independent character sets usable by john and architecture-independent scripts.Installed size: 61.07 MBHow to install: sudo apt install john-dataUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/john/"
	},

	{
		"id": "283",
		"tool": " theharvester",
		"description": "Search from email addresses from a domain (-d kali.org), limiting the results to 500 (-l 500), using Google (-b google):The package contains a tool for gathering subdomain names, e-mail addresses, virtual hosts, open ports/ banners, and employee names from different public sources (search engines, pgp key servers).Installed size: 1.72 MBHow to install: sudo apt install theharvesterUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/theharvester/"
	},

	{
		"id": "287",
		"tool": " traceroute",
		"description": "The traceroute utility displays the route used by IP packets on their way to a specified network (or Internet) host. Traceroute displays the IP number and host name (if possible) of the machines along the route taken by the packets. Traceroute is used as a network debugging tool. If you’re having network connectivity problems, traceroute will show you where the trouble is coming from along the route.Install traceroute if you need a tool for diagnosing network connectivity problems.Installed size: 158 KBHow to install: sudo apt install traceroutePrint the route packets trace to network hostPrint the route packets trace to network hostPrint the route packets trace to network hostPrint the route packets trace to network hostPrint the route packets trace to network hostPrint the route packets trace to network hostUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/traceroute/"
	},

	{
		"id": "294",
		"tool": " whois",
		"description": "This package provides a commandline client for the WHOIS (RFC 3912) protocol, which queries online servers for information such as contact details for domains and IP address assignments. It can intelligently select the appropriate WHOIS server for most queries.The package also contains mkpasswd, a features-rich front end to the password encryption function crypt(3).Installed size: 361 KBHow to install: sudo apt install whoisOverfeatured front end to crypt(3)Client for the whois directory serviceUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/whois/"
	},

	{
		"id": "297",
		"tool": " fcrackzip",
		"description": "fcrackzip is a fast password cracker partly written in assembler. It is able to crack password protected zip files with brute force or dictionary based attacks, optionally testing with unzip its results. It can also crack cpmask’ed images.This package is useful for pentesters, ethical hackers and forensics experts.Installed size: 81 KBHow to install: sudo apt install fcrackzipA Free/Fast Zip Password CrackerDisplay zip informationUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/fcrackzip/"
	},

	{
		"id": "300",
		"tool": " burpsuite ",
		"description": "Burp Suite is an integrated platform for performing security testing of web applications. Its various tools work seamlessly together to support the entire testing process, from initial mapping and analysis of an application’s attack surface, through to finding and exploiting security vulnerabilities.Burp gives you full control, letting you combine advanced manual techniques with state-of-the-art automation, to make your work faster, more effective, and more fun.Installed size: 223.45 MBHow to install: sudo apt install burpsuiteUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/burpsuite/"
	},

	{
		"id": "301",
		"tool": " steghide",
		"description": "Steghide is steganography program which hides bits of a data file in some of the least significant bits of another file in such a way that the existence of the data file is not visible and cannot be proven.Steghide is designed to be portable and configurable and features hiding data in bmp, jpeg, wav and au files, blowfish encryption, MD5 hashing of passphrases to blowfish keys, and pseudo-random distribution of hidden bits in the container data.Steghide is useful in digital forensics investigations.Installed size: 477 KBHow to install: sudo apt install steghideA steganography programSteghide is steganography program which hides bits of a data file in some of the least significant bits of another file in such a way that the existence of the data file is not visible and cannot be proven.Steghide is designed to be portable and configurable and features hiding data in bmp, jpeg, wav and au files, blowfish encryption, MD5 hashing of passphrases to blowfish keys, and pseudo-random distribution of hidden bits in the container data.These packages contains the common documentation files.Installed size: 7.45 MBHow to install: sudo apt install steghide-docUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/steghide/"
	},

	{
		"id": "305",
		"tool": " responder",
		"description": "Specify the IP address to redirect to (-i 192.168.1.202), enabling the WPAD rogue proxy (-w On), answers for netbios wredir (-r On), and fingerprinting (-f On):This package contains Responder/MultiRelay, an LLMNR, NBT-NS and MDNS poisoner. It will answer to specific NBT-NS (NetBIOS Name Service) queries based on their name suffix (see: http://support.microsoft.com/kb/163409). By default, the tool will only answer to File Server Service request, which is for SMB.The concept behind this is to target your answers, and be stealthier on the network. This also helps to ensure that you don’t break legitimate NBT-NS behavior. You can set the -r option via command line if you want to answer to the Workstation Service request name suffix.Installed size: 3.81 MBHow to install: sudo apt install responderUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/responder/"
	},

	{
		"id": "313",
		"tool": " recon-ng",
		"description": "Search for results on xssed.com (use recon/domains-vulnerabilities/xssed) for the target domain (set SOURCE cisco.com):Recon-ng is a full-featured Web Reconnaissance framework written in Python. Complete with independent modules, database interaction, built in convenience functions, interactive help, and command completion, Recon-ng provides a powerful environment in which open source web-based reconnaissance can be conducted quickly and thoroughly.Recon-ng has a look and feel similar to the Metasploit Framework, reducing the learning curve for leveraging the framework. However, it is quite different. Recon-ng is not intended to compete with existing frameworks, as it is designed exclusively for web-based open source reconnaissance. If you want to exploit, use the Metasploit Framework. If you want to Social Engineer, use the Social Engineer Toolkit.Installed size: 272 KBHow to install: sudo apt install recon-ngAllow the use of recon-ng from the command lineWeb Reconnaissance frameworkWeb-based user interface for Recon-ng.Updated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/recon-ng/"
	},

	{
		"id": "317",
		"tool": " ffuf ",
		"description": "ffuf is a fest web fuzzer written in Go that allows typical directory discovery, virtual host discovery (without DNS records) and GET and POST parameter fuzzing.Installed size: 6.53 MBHow to install: sudo apt install ffufFast web fuzzer written in GoUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/ffuf/"
	},

	{
		"id": "318",
		"tool": " autopsy ",
		"description": "The Autopsy Forensic Browser is a graphical interface to the command line digital forensic analysis tools in The Sleuth Kit. Together, The Sleuth Kit and Autopsy provide many of the same features as commercial digital forensics tools for the analysis of Windows and UNIX file systems (NTFS, FAT, FFS, EXT2FS, and EXT3FS).Installed size: 1.00 MBHow to install: sudo apt install autopsyAutopsy Forensic BrowserUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/autopsy/"
	},

	{
		"id": "319",
		"tool": " bettercap ",
		"description": "Scan the system in quiet mode (-Q) and output in cronjob format (–cronjob):The Swiss Army knife for 802.11, BLE, IPv4 and IPv6 networks reconnaissance and MITM attacks.bettercap is a powerful, easily extensible and portable framework written in Go which aims to offer to security researchers, red teamers and reverse engineers an easy to use, all-in-one solution with all the features they might possibly need for performing reconnaissance and attacking WiFi networks, Bluetooth Low Energy devices, wireless HID devices and Ethernet networks.Main Features:This package contains a Swiss Army knife for 802.11, BLE and Ethernet networks reconnaissance and attacks.Installed size: 23.66 MBHow to install: sudo apt install bettercapUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/bettercap/"
	},

	{
		"id": "320",
		"tool": " metagoofil ",
		"description": "Scan for documents from a domain (-d kali.org) that are PDF files (-t pdf), searching 100 results (-l 100), download 25 files (-n 25), saving the downloads to a directory (-o kalipdf), and saving the output to a file (-f kalipdf.html):Metagoofil is an information gathering tool designed for extracting metadata of public documents (pdf,doc,xls,ppt,docx,pptx,xlsx) belonging to a target company.Metagoofil will perform a search in Google to identify and download the documents to local disk. Metagoofil does no longer extract the metadata. See /usr/share/doc/metagoofil/README.md.gz.Installed size: 126 KBHow to install: sudo apt install metagoofilUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/metagoofil/"
	},

	{
		"id": "321",
		"tool": " mimikatz ",
		"description": "Mimikatz uses admin rights on Windows to display passwords of currently logged in users in plaintext.Installed size: 2.54 MBHow to install: sudo apt install mimikatzUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/mimikatz/"
	},

	{
		"id": "322",
		"tool": " wfuzz ",
		"description": "Use colour output (-c), a wordlist as a payload (-z file,/usr/share/wfuzz/wordlist/general/common.txt), and hide 404 messages (–hc 404) to fuzz the given URL (http://192.168.1.202/FUZZ):Wfuzz is a tool designed for bruteforcing Web Applications, it can be used for finding resources not linked directories, servlets, scripts, etc, bruteforce GET and POST parameters for checking different kind of injections (SQL, XSS, LDAP,etc), bruteforce Forms parameters (User/Password), Fuzzing, etc.Installed size: 1.54 MBHow to install: sudo apt install wfuzzA web application bruteforcerUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/wfuzz/"
	},

	{
		"id": "323",
		"tool": " reaver",
		"description": "Scan for networks using the monitor mode interface (-i wlan0mon) on channel 6 (-c 6), while ignoring frame checksum errors (-C):Use the monitor mode interface (-i mon0) to attack the access point (-b E0:3F:49:6A:57:78), displaying verbose output (-v):Reaver performs a brute force attack against an access point’s WiFi Protected Setup pin number. Once the WPS pin is found, the WPA PSK can be recovered and alternately the AP’s wireless settings can be reconfigured.Installed size: 1.62 MBHow to install: sudo apt install reaverWPS CrackerUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/reaver/"
	},

	{
		"id": "326",
		"tool": " lynis ",
		"description": "Scan the system in quiet mode (-Q) and output in cronjob format (–cronjob):Lynis is an auditing tool for hardening GNU/Linux and Unix based systems. It scans the system configuration and creates an overview of system information and security issues usable by professional auditors. It can assist in automated audits.Lynis can be used in addition to other software, like security scanners, system benchmarking and fine-tuning tools.Installed size: 1.61 MBHow to install: sudo apt install lynisSystem and security auditing toolUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/lynis/"
	},

	{
		"id": "327",
		"tool": " amass",
		"description": "This package contains a tool to help information security professionals perform network mapping of attack surfaces and perform external asset discovery using open source information gathering and active reconnaissance techniques.Information Gathering Techniques Used: - DNS: Basic enumeration, Brute forcing (upon request), Reverse DNS sweeping, Subdomain name alterations/permutations, Zone transfers (upon request) - Scraping: Ask, Baidu, Bing, DNSDumpster, DNSTable, Dogpile, Exalead, Google, HackerOne, IPv4Info, Netcraft, PTRArchive, Riddler, SiteDossier, ViewDNS, Yahoo - Certificates: Active pulls (upon request), Censys, CertSpotter, Crtsh, Entrust, GoogleCT - APIs: AlienVault, BinaryEdge, BufferOver, CIRCL, CommonCrawl, DNSDB, HackerTarget, Mnemonic, NetworksDB, PassiveTotal, RADb, Robtex, SecurityTrails, ShadowServer, Shodan, Spyse (CertDB & FindSubdomains), Sublist3rAPI, TeamCymru, ThreatCrowd, Twitter, Umbrella, URLScan, VirusTotal - Web Archives: ArchiveIt, ArchiveToday, Arquivo, LoCArchive, OpenUKArchive, UKGovArchive, WaybackThis package contains the command amass.Installed size: 29.30 MBHow to install: sudo apt install amassThis package contains a tool to help information security professionals perform network mapping of attack surfaces and perform external asset discovery using open source information gathering and active reconnaissance techniques.This package contains several wordlists for performing DNS name alterations and brute forcing.Installed size: 9.39 MBHow to install: sudo apt install amass-commonUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/amass/"
	},

	{
		"id": "331",
		"tool": " arpwatch",
		"description": "Arpwatch maintains a database of Ethernet MAC addresses seen on the network, with their associated IP pairs. Alerts the system administrator via e-mail if any change happens, such as new station/activity, flip-flops, changed and re-used old addresses.If you want to maintain a list authorized MAC addresses manually, take a look at the arpalert package which may fit your needs better.Installed size: 152 KBHow to install: sudo apt install arpwatchConvert arpwatch address database to ethers file formatObtain ethernet/ip address pairings via snmpKeep track of ethernet/ip address pairingsKeep track of ethernet/ip address pairingsTrack ethernet/ip address pairsConvert the ethernet vendor codes master list to arpwatch formatUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/arpwatch/"
	},

	{
		"id": "338",
		"tool": " sublist3r ",
		"description": "Search for subdomains of kali.org (-d kali.org) using the Bing search engine (-e bing) with 3 threads (-t 3).This package contains a Python security tool designed to enumerate subdomains of websites using OSINT. It helps penetration testers and bug hunters collect and gather subdomains for the domain they are targeting over the network. Sublist3r enumerates subdomains using many search engines such as Google, Yahoo, Bing, Baidu, and Ask. Sublist3r also enumerates subdomains using Netcraft, Virustotal, ThreatCrowd, DNSdumpster, and ReverseDNS.Subbrute was integrated with Sublist3r to increase the possibility of finding more subdomains using bruteforce with an improved wordlist.Installed size: 1.85 MBHow to install: sudo apt install sublist3rTool designed to enumerate subdomains of websites using OSINTUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/sublist3r/"
	},

	{
		"id": "339",
		"tool": " skipfish ",
		"description": "Using the given directory for output (-o 202), scan the web application URL (http://192.168.1.202/wordpress):Skipfish is an active web application security reconnaissance tool. It prepares an interactive sitemap for the targeted site by carrying out a recursive crawl and dictionary-based probes. The resulting map is then annotated with the output from a number of active (but hopefully non-disruptive) security checks. The final report generated by the tool is meant to serve as a foundation for professional web application security assessments.Installed size: 559 KBHow to install: sudo apt install skipfishWeb application security scannerUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/skipfish/"
	},

	{
		"id": "340",
		"tool": " netdiscover ",
		"description": "Netdiscover is an active/passive address reconnaissance tool, mainly developed for those wireless networks without dhcp server, when you are wardriving. It can be also used on hub/switched networks.Built on top of libnet and libpcap, it can passively detect online hosts, or search for them, by actively sending ARP requests.Netdiscover can also be used to inspect your network ARP traffic, or find network addresses using auto scan mode, which will scan for common local networks.Netdiscover uses the OUI table to show the vendor of the each MAC address discovered and is very useful for security checks or in pentests.Installed size: 2.71 MBHow to install: sudo apt install netdiscoverActive/passive ARP reconnaissance toolUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/netdiscover/"
	},

	{
		"id": "341",
		"tool": " mdk3 ",
		"description": "Use the wireless interface (wlan0) to run the Authentication DoS mode test (a):MDK is a proof-of-concept tool to exploit common IEEE 802.11 (Wi-Fi) protocol weaknesses. Features:Installed size: 172 KBHow to install: sudo apt install mdk3Wireless attack tool for IEEE 802.11 networksUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/mdk3/"
	},
	{
		"id": "393",
		"tool": " impacket-scripts",
		"description": "This package contains links to useful impacket scripts. It’s a separate package to keep impacket package from Debian and have the useful scripts in the path for Kali.Installed size: 60 KBHow to install: sudo apt install impacket-scriptsUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/impacket-scripts/"
	},
	{
		"id": "445",
		"tool": " dmitry ",
		"description": "Run a domain whois lookup (w), an IP whois lookup (i), retrieve Netcraft info (n), search for subdomains (s), search for email addresses (e), do a TCP port scan (p), and save the output to example.txt (o) for the domain example.com:DMitry is a UNIX/(GNU)Linux command line application written in C. DMitry can find possible subdomains, email addresses, uptime information, perform tcp port scan, whois lookups, and more.Installed size: 53 KBHow to install: sudo apt install dmitryDeepmagic Information Gathering ToolUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/dmitry/"
	},
	{
		"id": "446",
		"tool": " airgeddon ",
		"description": "airgeddon is a menu driven 3rd party tools wrapper to audit wireless networks with many features.Installed size: 3.66 MBHow to install: sudo apt install airgeddonUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/airgeddon/"
	},
	{
		"id": "447",
		"tool": " scapy",
		"description": "Scapy is a powerful interactive packet manipulation tool, packet generator, network scanner, network discovery, packet sniffer, etc. It can for the moment replace hping, 85% of nmap, arpspoof, arp-sk, arping, tcpdump, tethereal, p0f, &mldr;.In scapy you define a set of packets, then it sends them, receives answers, matches requests with answers and returns a list of packet couples (request, answer) and a list of unmatched packets. This has the big advantage over tools like nmap or hping that an answer is not reduced to (open/closed/filtered), but is the whole packet.This is the documentation package.Installed size: 38.16 MBHow to install: sudo apt install python-scapy-docScapy is a powerful interactive packet manipulation tool, packet generator, network scanner, network discovery, packet sniffer, etc. It can for the moment replace hping, 85% of nmap, arpspoof, arp-sk, arping, tcpdump, tethereal, p0f, &mldr;.In scapy you define a set of packets, then it sends them, receives answers, matches requests with answers and returns a list of packet couples (request, answer) and a list of unmatched packets. This has the big advantage over tools like nmap or hping that an answer is not reduced to (open/closed/filtered), but is the whole packet.This package contains the Python 3 version of the library and scapy executable.Installed size: 5.60 MBHow to install: sudo apt install python3-scapyInteractive packet manipulation toolInteractive packet manipulation toolUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/scapy/"
	},

	{
		"id": "452",
		"tool": " legion ",
		"description": "This package contains an open source, easy-to-use, super-extensible and semi-automated network penetration testing tool that aids in discovery, reconnaissance and exploitation of information systems.Legion is a fork of SECFORCE’s Sparta.Installed size: 3.12 MBHow to install: sudo apt install legionUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/legion/"
	},

	{
		"id": "453",
		"tool": " impacket",
		"description": "Impacket is a collection of Python3 classes focused on providing access to network packets. Impacket allows Python3 developers to craft and decode network packets in simple and consistent manner. It includes support for low-level protocols such as IP, UDP and TCP, as well as higher-level protocols such as NMB and SMB.Impacket is highly effective when used in conjunction with a packet capture utility or package such as Pcapy. Packets can be constructed from scratch, as well as parsed from raw data. Furthermore, the object oriented API makes it simple to work with deep protocol hierarchies.Installed size: 6.35 MBHow to install: sudo apt install python3-impacketUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/impacket/"
	},

	{
		"id": "459",
		"tool": " hash-identifier ",
		"description": "Software to identify the different types of hashes used to encrypt data and especially passwords.Installed size: 49 KBHow to install: sudo apt install hash-identifierUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/hash-identifier/"
	},

	{
		"id": "460",
		"tool": " dsniff",
		"description": "This package contains several tools to listen to and create network traffic:Please do not abuse this software.Installed size: 439 KBHow to install: sudo apt install dsniffIntercept packets on a switched LANForge replies to DNS address / pointer queriesPassword snifferSniff files from NFS trafficFlood a switched LAN with random MAC addressesSniff mail messages in Berkeley mbox formatSniff chat messagesSSH monkey-in-the-middleSSH traffic analysis toolKill TCP connections on a LANSlow down TCP connections on a LANSniff HTTP requests in Common Log FormatHTTP / HTTPS monkey-in-the-middleDisplay sniffed URLs in Netscape in real-timeUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/dsniff/"
	},

	{
		"id": "475",
		"tool": " dnsmap",
		"description": "Scan example.com using a wordlist (-w /usr/share/wordlists/dnsmap.txt):Create a file containing domain names to scan (domains.txt) and pass it to dnsmap-bulk.sh:dnsmap scans a domain for common subdomains using a built-in or an external wordlist (if specified using -w option). The internal wordlist has around 1000 words in English and Spanish as ns1, firewall servicios and smtp. So will be possible search for smtp.example.com inside example.com automatically. Results can be saved in CSV and human-readable format for further processing. dnsmap does NOT require root privileges to be run, and should NOT be run with such privileges for security reasons.dnsmap was originally released back in 2006 and was inspired by the fictional story “The Thief No One Saw” by Paul Craig, which can be found in the book “Stealing the Network - How to 0wn the Box”.dnsmap is mainly meant to be used by pentesters during the information gathering/enumeration phase of infrastructure security assessments. During the enumeration stage, the security consultant would typically discover the target company’s IP netblocks, domain names, phone numbers, etc.Subdomain brute-forcing is another technique that should be used in the enumeration stage, as it’s especially useful when other domain enumeration techniques such as zone transfers don’t work (I rarely see zone transfers being publicly allowed these days by the way).Fun things that can happen:This package provides two possible commands: dnsmap and dnsmap-bulk.This program is useful for pentesters, ethical hackers and forensics experts. It also can be used for security tests.Installed size: 256 KBHow to install: sudo apt install dnsmapScan for subdomains using bruteforcing techniquesMass scan using dnsmapUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/dnsmap/"
	},

	{
		"id": "478",
		"tool": " bloodhound ",
		"description": "Install Bloodhound from the apt repository with:After installation completes, start neo4j with the following command:Now we need to change the default credentials for neo4j. Navigate to localhost:7474 and login with the default credentialsAfter logging in, you will be asked to change the default password with a new one. You need this password to later login in the Bloodhound interface.Now that the password has been successfully modified you can finally launch Bloodhound with the new credentials.This package contains BloodHound, a single page Javascript web application. BloodHound uses graph theory to reveal the hidden and often unintended relationships within an Active Directory environment. Attackers can use BloodHound to easily identify highly complex attack paths that would otherwise be impossible to quickly identify. Defenders can use BloodHound to identify and eliminate those same attack paths. Both blue and red teams can use BloodHound to easily gain a deeper understanding of privilege relationships in an Active Directory environment.Installed size: 260.51 MBHow to install: sudo apt install bloodhoundUpdated on: 2022-Dec-08",
		"url": "https://www.kali.org/tools/bloodhound/"
	},

	{
		"id": "479",
		"tool": " binwalk",
		"description": "Run a file signature scan (-B) on the given firmware file (ddwrt-linksys-wrt1200ac-webflash.bin):Binwalk is a tool for searching a given binary image for embedded files and executable code. Specifically, it is designed for identifying files and code embedded inside of firmware images. Binwalk uses the libmagic library, so it is compatible with magic signatures created for the Unix file utility.Binwalk also includes a custom magic signature file which contains improved signatures for files that are commonly found in firmware images such as compressed/archived files, firmware headers, Linux kernels, bootloaders, filesystems, etc.This package is an empty package, because the binary tool is already provided with the library, dependency of this package.Installed size: 18 KBHow to install: sudo apt install binwalkTool for searching binary images for embedded files and executable codeBinwalk is a tool for searching a given binary image for embedded files and executable code. Specifically, it is designed for identifying files and code embedded inside of firmware images. Binwalk uses the libmagic library, so it is compatible with magic signatures created for the Unix file utility.Binwalk also includes a custom magic signature file which contains improved signatures for files that are commonly found in firmware images such as compressed/archived files, firmware headers, Linux kernels, bootloaders, filesystems, etc.This is the Python 3 version of the package.Installed size: 562 KBHow to install: sudo apt install python3-binwalkUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/binwalk/"
	},

	{
		"id": "483",
		"tool": " wifiphisher ",
		"description": "Do not perform jamming (-nJ), create a wireless access point (-e “Free Wi-Fi”) and present a fake firmware upgrade to clients (-T firmware-upgrade). When a client connects, they a presented with a webpage to enter the PSK of their network:This package contains a security tool that mounts automated phishing attacks against Wi-Fi networks in order to obtain secret passphrases or other credentials. It is a social engineering attack that unlike other methods it does not include any brute forcing. It is an easy way for obtaining credentials from captive portals and third party login pages or WPA/WPA2 secret passphrases.Installed size: 7.91 MBHow to install: sudo apt install wifiphisherUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/wifiphisher/"
	},

	{
		"id": "484",
		"tool": " sslstrip ",
		"description": "sslstrip is a tool that transparently hijacks HTTP traffic on a network, watch for HTTPS links and redirects, and then map those links into look-alike HTTP links or homograph-similar HTTPS links. It also supports modes for supplying a favicon which looks like a lock icon, selective logging, and session denial.Installed size: 60 KBHow to install: sudo apt install sslstripManual page for sslstripUpdated on: 2022-Jul-23",
		"url": "https://www.kali.org/tools/sslstrip/"
	},

	{
		"id": "485",
		"tool": " slowhttptest ",
		"description": "Use 1000 connections (-c 1000) with the Slowloris mode (-H), and generate statistics (-g> with the output file name (-o slowhttp). Use 10 seconds to wait for data (-i 10), 200 connections (-r 200) with GET requests (-t GET) against the target URL (-u http://192.168.1.202/index.php) with a maximum of length of 24 bytes (-x 24) and a 3 second time out (-p 3):SlowHTTPTest is a highly configurable tool that simulates some application layer Denial of Service attacks.It implements most common low-bandwidth application layer Denial of Service attacks, such asInstalled size: 89 KBHow to install: sudo apt install slowhttptestDenial Of Service attacks simulatorUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/slowhttptest/"
	},

	{
		"id": "486",
		"tool": " rkhunter ",
		"description": "Rootkit Hunter scans systems for known and unknown rootkits, backdoors, sniffers and exploits.It checks for:Using rkhunter alone does not guarantee that a system is not compromised. Running additional tests, such as chkrootkit, is recommended.Installed size: 1.05 MBHow to install: sudo apt install rkhunterRootKit HunterUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/rkhunter/"
	},

	{
		"id": "487",
		"tool": " medusa ",
		"description": "Medusa is intended to be a speedy, massively parallel, modular, login brute-forcer. The goal is to support as many services which allow remote authentication as possible. The author considers following items as some of the key features of this application: * Thread-based parallel testing. Brute-force testing can be performed against multiple hosts, users or passwords concurrently. * Flexible user input. Target information (host/user/password) can be specified in a variety of ways. For example, each item can be either a single entry or a file containing multiple entries. Additionally, a combination file format allows the user to refine their target listing. * Modular design. Each service module exists as an independent .mod file. This means that no modifications are necessary to the core application in order to extend the supported list of services for brute-forcing.Installed size: 794 KBHow to install: sudo apt install medusaParallel Network Login AuditorUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/medusa/"
	},

	{
		"id": "488",
		"tool": " fierce ",
		"description": "Run a default scan against the target domain (-dns example.com):Fierce is a semi-lightweight scanner that helps locate non-contiguous IP space and hostnames against specified domains. It’s really meant as a pre-cursor to nmap, unicornscan, nessus, nikto, etc, since all of those require that you already know what IP space you are looking for. This does not perform exploitation and does not scan the whole internet indiscriminately. It is meant specifically to locate likely targets both inside and outside a corporate network.Because it uses DNS primarily you will often find mis-configured networks that leak internal address space. That’s especially useful in targeted malware. Originally written by RSnake along with others at http://ha.ckers.org/. This is simply a conversion to Python 3 to simplify and modernize the codebase.Installed size: 238 KBHow to install: sudo apt install fierceDNS scanner that helps locate non-contiguous IP space and hostnames against specified domains.Updated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/fierce/"
	},

	{
		"id": "489",
		"tool": " crackmapexec",
		"description": "This package is a swiss army knife for pentesting Windows/Active Directory environments.From enumerating logged on users and spidering SMB shares to executing psexec style attacks, auto-injecting Mimikatz/Shellcode/DLL’s into memory using Powershell, dumping the NTDS.dit and more.The biggest improvements over the above tools are:Additionally, a database is used to store used/dumped credentals. It also automatically correlates Admin credentials to hosts and vice-versa allowing you to easily keep track of credential sets and gain additional situational awareness in large environments.Installed size: 2.30 MBHow to install: sudo apt install crackmapexecUpdated on: 2022-Nov-24",
		"url": "https://www.kali.org/tools/crackmapexec/"
	},

	{
		"id": "492",
		"tool": " commix ",
		"description": "Attempt to exploit a site (–url=”http://192.168.0.23/commix-testbed/scenarios/referer/referer(classic).php”) using the highest testing level (–level=3):This package contains Commix (short for [comm]and [i]njection e[x]ploiter). It has a simple environment and it can be used, from web developers, penetration testers or even security researchers to test web applications with the view to find bugs, errors or vulnerabilities related to command injection attacks. By using this tool, it is very easy to find and exploit a command injection vulnerability in a certain vulnerable parameter or string. Commix is written in Python programming language.Installed size: 1.21 MBHow to install: sudo apt install commixUpdated on: 2022-Nov-23",
		"url": "https://www.kali.org/tools/commix/"
	},

	{
		"id": "493",
		"tool": " chntpw",
		"description": "This little program provides a way to view information and change user passwords in a Windows NT/2000 user database file. Old passwords need not be known since they are overwritten. In addition it also contains a simple registry editor (same size data writes) and an hex-editor which enables you to fiddle around with bits and bytes in the file as you wish.If you want GNU/Linux bootdisks for offline password recovery you can add this utility to custom image disks or use those provided at the tools homepage.Installed size: 486 KBHow to install: sudo apt install chntpwUtility to overwrite passwords of Windows systemsUtility to export/import and edit a Windows registry hivesReset passwords of users in the SAM user databaseUnlock users in the SAM user databaseAdd or remove users from groups in SAM database filesUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/chntpw/"
	},

	{
		"id": "499",
		"tool": " arp-scan",
		"description": "Scan the local network, using the information from the primary network interface:Scan a subnet, specifying the interface to use and a custom source MAC address:arp-scan is a command-line tool that uses the ARP protocol to discover and fingerprint IP hosts on the local network. It is available for Linux and BSD under the GPL licenceInstalled size: 1.22 MBHow to install: sudo apt install arp-scanFingerprint a system using ARPThe ARP scannerFetch the arp-scan IAB file from the IEEE websiteFetch the arp-scan OUI file from the IEEE website (on Debian and Debian based systems, data is fetched from ieee-data package)Updated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/arp-scan/"
	},

	{
		"id": "504",
		"tool": " xsser ",
		"description": "Cross Site “Scripter” (aka XSSer) is an automatic -framework- to detect, exploit and report XSS vulnerabilities in web-based applications.It contains several options to try to bypass certain filters, and various special techniques of code injection.Installed size: 23.98 MBHow to install: sudo apt install xsserUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/xsser/"
	},

	{
		"id": "505",
		"tool": " spiderfoot",
		"description": "This package contains an open source intelligence (OSINT) automation tool. Its goal is to automate the process of gathering intelligence about a given target, which may be an IP address, domain name, hostname, network subnet, ASN, e-mail address or person’s name.SpiderFoot can be used offensively, i.e. as part of a black-box penetration test to gather information about the target, or defensively to identify what information you or your organisation are freely providing for attackers to use against you.Installed size: 13.73 MBHow to install: sudo apt install spiderfootUpdated on: 2022-Nov-23",
		"url": "https://www.kali.org/tools/spiderfoot/"
	},

	{
		"id": "508",
		"tool": " parsero ",
		"description": "Search for results from a website (-u www.bing.com) using Bing indexed Disallows (-sb):Parsero is a free script written in Python which reads the Robots.txt file of a web server and looks at the Disallow entries. The Disallow entries tell the search engines what directories or files hosted on a web server mustn’t be indexed. For example, “Disallow: /portal/login” means that the content on www.example.com/portal/login it’s not allowed to be indexed by crawlers like Google, Bing, Yahoo&mldr; This is the way the administrator have to not share sensitive or private information with the search engines.Installed size: 19 KBHow to install: sudo apt install parseroUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/parsero/"
	},

	{
		"id": "509",
		"tool": " nuclei ",
		"description": "This package contains a fast tool for configurable targeted scanning based on templates offering massive extensibility and ease of use.Nuclei is used to send requests across targets based on a template leading to zero false positives and providing fast scanning on large number of hosts. Nuclei offers scanning for a variety of protocols including TCP, DNS, HTTP, File, etc. With powerful and flexible templating, all kinds of security checks can be modelled with Nuclei.Installed size: 47.45 MBHow to install: sudo apt install nucleiUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/nuclei/"
	},

	{
		"id": "510",
		"tool": " ghidra ",
		"description": "This package contains a software reverse engineering (SRE) framework created and maintained by the National Security Agency Research Directorate. This framework includes a suite of full-featured, high-end software analysis tools that enable users to analyze compiled code on a variety of platforms including Windows, macOS, and Linux. Capabilities include disassembly, assembly, decompilation, graphing, and scripting, along with hundreds of other features. Ghidra supports a wide variety of processor instruction sets and executable formats and can be run in both user-interactive and automated modes. Users may also develop their own Ghidra extension components and/or scripts using Java or Python.In support of NSA’s Cybersecurity mission, Ghidra was built to solve scaling and teaming problems on complex SRE efforts, and to provide a customizable and extensible SRE research platform. NSA has applied Ghidra SRE capabilities to a variety of problems that involve analyzing malicious code and generating deep insights for SRE analysts who seek a better understanding of potential vulnerabilities in networks and systems.Installed size: 917.19 MBHow to install: sudo apt install ghidraUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/ghidra/"
	},

	{
		"id": "511",
		"tool": " foremost ",
		"description": "Search for a selection of file types (-t doc,jpg,pdf,xls) in the given image file (-i image.dd):Foremost is a forensic program to recover lost files based on their headers, footers, and internal data structures.Foremost can work on image files, such as those generated by dd, Safeback, Encase, etc, or directly on a drive. The headers and footers can be specified by a configuration file or you can use command line switches to specify built-in file types. These built-in types look at the data structures of a given file format allowing for a more reliable and faster recovery.Installed size: 102 KBHow to install: sudo apt install foremostRecover files using their headers, footers, and data structuresUpdated on: 2022-Nov-28",
		"url": "https://www.kali.org/tools/foremost/"
	},

	{
		"id": "512",
		"tool": " dnsrecon ",
		"description": "Scan a domain (-d example.com), use a dictionary to brute force hostnames (-D /usr/share/wordlists/dnsmap.txt), do a standard scan (-t std), and save the output to a file (–xml dnsrecon.xml):DNSRecon is a Python script that provides the ability to perform:Installed size: 1.40 MBHow to install: sudo apt install dnsreconDNS Enumeration and Scanning ToolUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/dnsrecon/"
	},

	{
		"id": "513",
		"tool": " dirsearch ",
		"description": "This package contains is a command-line tool designed to brute force directories and files in webservers.As a feature-rich tool, dirsearch gives users the opportunity to perform a complex web content discovering, with many vectors for the wordlist, high accuracy, impressive performance, advanced connection/request settings, modern brute-force techniques and nice output.Installed size: 480 KBHow to install: sudo apt install dirsearchAn advanced command-line tool designed to brute force directories and files in webserversUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/dirsearch/"
	},

	{
		"id": "514",
		"tool": " capstone",
		"description": "Capstone is a lightweight multi-platform, multi-architecture disassembly framework.This package contains cstool, a command-line tool to disassemble hexadecimal strings.Installed size: 6.41 MBHow to install: sudo apt install capstone-toolCapstone is a lightweight multi-platform, multi-architecture disassembly framework.These are the development headers and libraries.Installed size: 7.87 MBHow to install: sudo apt install libcapstone-devCapstone is a lightweight multi-platform, multi-architecture disassembly framework.Features:Installed size: 6.38 MBHow to install: sudo apt install libcapstone4Capstone is a lightweight multi-platform, multi-architecture disassembly framework.These are the Python 3 bindings.Installed size: 518 KBHow to install: sudo apt install python3-capstoneUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/capstone/"
	},

	{
		"id": "520",
		"tool": " bed ",
		"description": "Use the HTTP plugin (-s HTTP) to fuzz the target server (-t 192.168.1.15):BED is a program which is designed to check daemons for potential buffer overflows, format strings et. al.Installed size: 73 KBHow to install: sudo apt install bedUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/bed/"
	},

	{
		"id": "521",
		"tool": " whatweb ",
		"description": "WhatWeb identifies websites. It recognises web technologies including content management systems (CMS), blogging platforms, statistic/analytics packages, JavaScript libraries, web servers, and embedded devices.WhatWeb has over 900 plugins, each to recognise something different. It also identifies version numbers, email addresses, account IDs, web framework modules, SQL errors, and more.Installed size: 18.59 MBHow to install: sudo apt install whatwebNext generation Web scanner. Identify technologies used by websites.Updated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/whatweb/"
	},

	{
		"id": "522",
		"tool": " shellter ",
		"description": "Shellter is a dynamic shellcode injection tool aka dynamic PE infector. It can be used in order to inject shellcode into native Windows applications (currently 32-bit apps only). The shellcode can be something yours or something generated through a framework, such as Metasploit.Shellter takes advantage of the original structure of the PE file and doesn’t apply any modification such as changing memory access permissions in sections (unless the user wants to), adding an extra section with RWE access, and whatever would look dodgy under an AV scan.Installed size: 726 KBHow to install: sudo apt install shellterUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/shellter/"
	},

	{
		"id": "523",
		"tool": " rainbowcrack",
		"description": "RainbowCrack is a general propose implementation of Philippe Oechslin’s faster time-memory trade-off technique. It crack hashes with rainbow tables.RainbowCrack uses time-memory tradeoff algorithm to crack hashes. It differs from the hash crackers that use brute force algorithm.Installed size: 494 KBHow to install: sudo apt install rainbowcrackUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/rainbowcrack/"
	},

	{
		"id": "530",
		"tool": " maryam ",
		"description": "This package contains the OWASP Maryam, a modular/optional open source framework based on OSINT and data gathering. Maryam is written in Python programming language and it’s designed to provide a powerful environment to harvest data from open sources and search engines and collect data quickly and thoroughly.Installed size: 1.08 MBHow to install: sudo apt install maryamUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/maryam/"
	},

	{
		"id": "531",
		"tool": " macchanger ",
		"description": "GNU MAC Changer is an utility that makes the maniputation of MAC addresses of network interfaces easier. MAC addresses are unique identifiers on networks, they only need to be unique, they can be changed on most network hardware. MAC addresses have started to be abused by unscrupulous marketing firms, government agencies, and others to provide an easy way to track a computer across multiple networks. By changing the MAC address regularly, this kind of tracking can be thwarted, or at least made a lot more difficult.Features:Installed size: 637 KBHow to install: sudo apt install macchangerMAC ChangerUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/macchanger/"
	},

	{
		"id": "532",
		"tool": " jsql",
		"description": "jSQL Injection is a lightweight application used to find database information from a distant server. jSQL is free, open source and cross-platform (Windows, Linux, Mac OS X, Solaris).Installed size: 7.74 MBHow to install: sudo apt install jsql-injectionUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/jsql/"
	},

	{
		"id": "535",
		"tool": " hakrawler ",
		"description": "Fast golang web crawler for gathering URLs and JavaSript file locations. This is basically a simple implementation of the awesome Gocolly library.Installed size: 8.48 MBHow to install: sudo apt install hakrawlerUpdated on: 2022-Jul-14",
		"url": "https://www.kali.org/tools/hakrawler/"
	},

	{
		"id": "536",
		"tool": " dnsenum ",
		"description": "Don’t do a reverse lookup (–noreverse) and save the output to a file (-o mydomain.xml) for the domain example.com:Dnsenum is a multithreaded perl script to enumerate DNS information of a domain and to discover non-contiguous ip blocks. The main purpose of Dnsenum is to gather as much information as possible about a domain. The program currently performs the following operations:This program is useful for pentesters, ethical hackers and forensics experts. It also can be used for security tests.Installed size: 88 KBHow to install: sudo apt install dnsenumUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/dnsenum/"
	},

	{
		"id": "537",
		"tool": " chisel ",
		"description": "This package contains a fast TCP/UDP tunnel, transported over HTTP, secured via SSH. Single executable including both client and server. Chisel is mainly useful for passing through firewalls, though it can also be used to provide a secure endpoint into your network.Installed size: 8.35 MBHow to install: sudo apt install chiselUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/chisel/"
	},

	{
		"id": "538",
		"tool": " arjun ",
		"description": "This package contains tools to find query parameters for URL enpoints.Web applications use parameters (or queries) to accept user input, take the following example into consideration: http://api.example.com/v1/userinfo?id=751634589 This URL seems to load user information for a specific user id, but what if there exists a parameter named admin which when set to True makes the endpoint provide more information about the user? This is what Arjun does, it finds valid HTTP parameters with a huge default dictionary of 25,980 parameter names.Installed size: 328 KBHow to install: sudo apt install arjunUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/arjun/"
	},

	{
		"id": "539",
		"tool": " android-sdk ",
		"description": "The Android SDK provides you the API libraries and developer tools necessary to build, test, and debug apps for Android.Installed size: 124.87 MBHow to install: sudo apt install android-sdkUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/android-sdk/"
	},

	{
		"id": "540",
		"tool": " amap",
		"description": "Scan port 80 on 192.168.1.15. Display the received banners (b), do not display closed ports (q), and use verbose output (v):AMAP stands for Application MAPper. It is a next-generation scanning tool for pentesters. It attempts to identify applications even if they are running on a different port than normal.It also identifies non-ascii based applications. This is achieved by sending trigger packets, and looking up the responses in a list of response strings.Installed size: 177 KBHow to install: sudo apt install amapA powerful application mapperA powerful application mapperUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/amap/"
	},

	{
		"id": "545",
		"tool": " wafw00f ",
		"description": "This package identifies and fingerprints Web Application Firewall (WAF) products using the following logic:Installed size: 240 KBHow to install: sudo apt install wafw00fIdentify and fingerprint Web Application Firewall productsUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/wafw00f/"
	},

	{
		"id": "546",
		"tool": " veil",
		"description": "Veil is a tool designed to generate metasploit payloads that bypass common anti-virus solutions. It replaces the package veil-evasion.Installed size: 871 KBHow to install: sudo apt install veilThis is a transitional package. It can safely be removed.Installed size: 12 KBHow to install: sudo apt install veil-catapultThis is a transitional package. It can safely be removed.Installed size: 12 KBHow to install: sudo apt install veil-evasionUpdated on: 2022-Nov-16",
		"url": "https://www.kali.org/tools/veil/"
	},

	{
		"id": "551",
		"tool": " sslyze ",
		"description": "Launch a regular scan type (–regular) against the target host (www.example.com):SSLyze is a Python tool that can analyze the SSL configuration of a server by connecting to it. It is designed to be fast and comprehensive, and should help organizations and testers identify misconfigurations affecting their SSL servers.Installed size: 2.10 MBHow to install: sudo apt install sslyzeUpdated on: 2022-Nov-24",
		"url": "https://www.kali.org/tools/sslyze/"
	},

	{
		"id": "552",
		"tool": " sslscan ",
		"description": "SSLScan queries SSL services, such as HTTPS, in order to determine the ciphers that are supported. SSLScan is designed to be easy, lean and fast. The output includes preferred ciphers of the SSL service, the certificate and is in text and XML formats.Installed size: 3.24 MBHow to install: sudo apt install sslscanFast SSL/TLS scannerUpdated on: 2022-Aug-05",
		"url": "https://www.kali.org/tools/sslscan/"
	},

	{
		"id": "553",
		"tool": " set",
		"description": "The Social-Engineer Toolkit (SET) is an open-source Python-driven tool aimed at penetration testing around Social-Engineering.Installed size: 48.50 MBHow to install: sudo apt install setUpdated on: 2022-Nov-24",
		"url": "https://www.kali.org/tools/set/"
	}
];

export default database;
