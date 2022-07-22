import{_ as s,a as n,b as a}from"./chunks/run_integration.2000fc07.js";import{_ as e,j as o,g as l,H as p}from"./chunks/framework.8815fd6f.js";const h=JSON.parse('{"title":"Start Running","description":"","frontmatter":{},"headers":[{"level":2,"title":"Command Line","slug":"command-line"},{"level":2,"title":"Interactive Console","slug":"interactive-console"},{"level":2,"title":"Python Module","slug":"python-module"}],"relativePath":"en/guide/run.md","lastUpdated":null}'),t={name:"en/guide/run.md"},c=p('<h1 id="start-running" tabindex="-1">Start Running <a class="header-anchor" href="#start-running" aria-hidden="true">#</a></h1><p>Pocsuite3 has three running methods: 1. Command line; 2. Interactive console; 3. Imported as a Python module.</p><h2 id="command-line" tabindex="-1">Command Line <a class="header-anchor" href="#command-line" aria-hidden="true">#</a></h2><p>Run the <code>pocsuite</code> command, and use the corresponding parameters to specify the target and PoC to be tested.</p><p><img src="'+s+'" alt=""></p><p>Parameters can also be defined in the <code>pocsuite3.ini</code> file and run with <code>pocsuite -c pocsuite.ini</code>.</p><p>Configuration examples: <a href="./parameter-posuite-ini.html">pocsuite.ini</a></p><h2 id="interactive-console" tabindex="-1">Interactive Console <a class="header-anchor" href="#interactive-console" aria-hidden="true">#</a></h2><p>A console similar to Metasploit, use the <code>poc-console</code> command to enter.</p><p><img src="'+n+`" alt=""></p><h2 id="python-module" tabindex="-1">Python Module <a class="header-anchor" href="#python-module" aria-hidden="true">#</a></h2><p>Pocsuite3 API provides all functions to call <code>pocsuite3</code>, see testcase <a href="https://github.com/knownsec/pocsuite3/blob/master/tests/test_import_pocsuite_execute.py" target="_blank" rel="noreferrer"><code>tests/test_import_pocsuite_execute.py</code></a>. A typical calling method is as follows:</p><div class="language-python"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pocsuite3</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">api </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> init_pocsuite</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pocsuite3</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">api </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> start_pocsuite</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> pocsuite3</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">api </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> get_results</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">run_pocsuite</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># config configuration can refer to pocsuite.ini, used to initialize pocsuite3.lib.core.data.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">    config </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">url</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://127.0.0.1:8080</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http://127.0.0.1:21</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">poc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ecshop_rce</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ftp_burst</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">init_pocsuite</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">config</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">start_pocsuite</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">get_results</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p><img src="`+a+'" alt=""></p>',14),r=[c];function i(D,y,F,d,u,A){return l(),o("div",null,r)}var _=e(t,[["render",i]]);export{h as __pageData,_ as default};
