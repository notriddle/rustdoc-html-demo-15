searchState.loadedDescShard("compiletest", 0, "The maximum of a set of file-modified timestamps.\nMutable state used during test collection.\nRead-only context data used during test collection.\nUpdates this timestamp to the most recent last-modified …\nUpdates this timestamp to the last-modified time of the …\nChecks that test discovery didn’t find any tests whose …\nCreates libtest structures for every test/revision in the …\nRecursively scans a directory to find test files and …\nReturns the most recent last-modified timestamp from among …\nReturns a list of files that, if modified, would cause …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a timestamp holding the last-modified time of the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if <code>file_name</code> looks like a proper test file …\nChecks whether a particular test/revision is “up-to-date…\nThese structs are a subset of the ones found in …\nFor a single test file, creates one or more test …\nCreates a callback for this test/revision that libtest …\nCreates a name for this test/revision that can be handed …\nReturns a list of modified/untracked test files that …\nCreates the <code>Config</code> instance for this invocation of …\nCalled by <code>main</code> after the config has been parsed.\nThe path of the <code>stamp</code> file that gets created or updated …\nConfiguration for compiletest\nstatus whether android device available or not\nExtra parameter to run adb on arm-linux-androideabi\nExtra parameter to run test suite on arm-linux-androideabi\nPath to the android tools\n<code>true</code> to overwrite stderr/stdout files instead of …\nThe directory where programs should be built\nGet the list of builtin, ‘well known’ cfg names\nThe cargo executable.\nPath to / name of the Microsoft Console Debugger (CDB) …\nVersion of CDB\nThe current Rust channel\nWhether to use colors in test.\nmode describing what file the actual ui output will be …\nThe library paths required for running the compiler.\nThe coverage-dump executable.\nThe debugger to use in debuginfo mode. Unset otherwise.\nCommand for visual diff display, e.g. …\nThe default Rust edition\nUsed by <code>ui</code> tests to generate things like <code>foo.stderr</code> from …\nExactly match the filter, rather than a substring\nOnly run tests that match these filters\nForce the pass mode of a check/build/run-pass test to this …\nWhether to rerun tests even if the inputs are unchanged.\nPrint one character per test instead of one line\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nPath to / name of the GDB executable\nVersion of GDB, encoded as ((major * 1000) + minor) * 1000 …\nWhether adding git commit information such as the commit …\nwhether to run <code>enzyme</code> autodiff tests\nwhether to run <code>tidy</code> (html-tidy) when a rustdoc test fails\nHost triple for the compiler being invoked\nFlags to pass to the compiler when building for the host\nAbsolute path to the directory to use for incremental …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe jsondocck executable.\nThe jsondoclint executable.\nthe path containing LLDB’s Python module\nVersion of LLDB\nPath to LLVM’s bin directory.\nThe LLVM <code>FileCheck</code> binary path.\nVersion of LLVM\nWrite out a parseable log of tests that were run\nPath to minicore aux library, used for <code>no_core</code> tests that …\nThe test mode, e.g. ui or debuginfo.\nPath to a NodeJS executable. Used for JS doctests, …\nPath to a npm executable. Used for rustdoc GUI tests\nOnly rerun the tests that result has been modified …\nWhether tests should be optimized by default. Individual …\nAbsolute path to the directory where all output for the …\nAbsolute path to the base filename used as output for the …\nAbsolute path to the directory where all output for all …\nGenerates a unique name for the test, such as …\nTrue if the profiler runtime is enabled for this target. …\nThe Python executable to use for LLDB and htmldocck.\nwhere to find the remote test client process, if we’re …\nExplicitly enable or disable running.\nThe path to the Clang executable to run Clang-based tests …\nRun ignored tests\nThe library paths required for running compiled programs.\nA command line to prefix program execution with, for …\nWhether the compiler and stdlib has been built with …\nThe rustc executable.\nThe rustdoc executable.\nIf true, this will generate a coverage file with UI test …\nSkip tests matching these substrings. Corresponds to …\nThe directory containing the tests to run\nThe name of the stage being built (stage1, etc)\nThe test suite (essentially which directory is running, …\nThe directory containing the compiler sysroot\nIs LLVM a system LLVM\nTarget system to be tested\nFlags to pass to the compiler when building for the target\nExplain what’s going on\nWhether rustc was built with debug assertions.\nWhether std was built with debug assertions.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nFilters based on filetype and extension whether to diff a …\nReturns Path to CDB\nReturns (Path to GDB, GDB Version)\nReturns LLDB version\nReturns <code>true</code> if the given target is an Android target for …\nReturns <code>true</code> if the given target is a MSVC target for the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhat kind of message we expect (e.g., warning, error, …\nLooks for either “//| KIND MESSAGE” or “//^^… KIND …\nThe (partly) broken-down contents of a line containing a …\nProperties which must be known very early, before actually …\nThis was originally generated by collecting directives …\nBuild and use <code>minicore</code> as <code>core</code> stub for <code>no_core</code> tests in …\nAuxiliary crates that should be built and made available …\nAuxiliary crates that should be built and made available …\nCode for dealing with test directives that request an “…\nExtra flags to pass to rustdoc but not the compiler.\nGiven an llvm version string that looks like <code>1.2.3-rc1</code>, …\nTakes a directive of the form <code>&quot;&lt;version1&gt; [- &lt;version2&gt;]&quot;</code>, …\nExtra flags to pass to LLVM’s <code>filecheck</code> tool, in tests …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nRun tests which require enzyme being build\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIf the given line begins with the appropriate comment …\nExtra flags to pass to <code>llvm-cov</code> when producing coverage …\nFor tests using the <code>needs-llvm-zstd</code> directive:\nLoads properties from <code>testfile</code> into <code>props</code>. If a property is\nDon’t automatically insert any <code>--check-cfg</code> args\nParses the regex and replacement values of a …\nThe main part of the directive, after removing the comment …\nSome test directives start with a revision name in square …\nBuild the documentation for each crate in a unique output …\nProperties parsed from <code>aux-*</code> test directives.\nYields all of the paths (relative to <code>./auxiliary/</code>) that …\nAuxiliary crates that should be compiled as …\nOther crates that should be built and made available to …\nSimilar to <code>builds</code>, but also uses the resulting dylib as a …\nSimilar to <code>builds</code>, but a list of NAME=somelib.rs of …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nIf the given test directive line contains an <code>aux-*</code> …\nThe directive is handled by other parts of our tooling.\nThe directive was invalid.\nMatch.\nNo match.\nThe line is not actually a directive.\nThe result of parse_cfg_name_directive.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nParses a name-value directive which contains …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether LLVM built with zstd, for the <code>needs-llvm-zstd</code> …\nThe code itself.\nReturns the deepest source span in the macro call stack …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nname of macro that was applied (e.g., “foo!” or “#[…\nspan where macro was applied to generate this code\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhat value should be passed to <code>--emit</code>?\nWill this test be executed? Should we use <code>make_exe_name</code>?\nReplace line numbers in coverage reports with the …\nGets the directory where auxiliary binaries are written. …\nGets the directory where auxiliary files are written. …\nBuilds an aux dependency.\nBuilds <code>minicore</code>. Returns the path to the minicore rlib …\nThis method is used for <code>//@ check-test-line-numbers-match</code>.\n<code>root_testpaths</code> refers to the path of the original test. …\nFor each <code>aux-build: foo/bar</code> annotation, we check to find …\nCode specific to the coverage test suites.\n<code>root_out_dir</code> and <code>root_testpaths</code> refer to the parameters of …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe platform-specific library name\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if we should report an error about …\nCreates a filename for output with the given extension. …\nNormalize output differences across platforms. Generally …\nGets the absolute path to the directory where all output …\nGets the absolute path to the base filename used as output …\nGenerates a unique name for the test, such as …\nRuns a <code>Command</code> and waits for it to finish, then converts …\nRun any doctests embedded in this test file, and add any …\nCode executed for each revision in turn (or, if there are …\nThe revision, ignored for incremental compilation since it …\nCoverage reports can describe multiple source files, …\nRepresentation of information to invoke a debugger and …\nLines to insert breakpoints at\nContains the source line number to check and the line …\nGiven debugger output and lines to check, ensure that …\nCheck that the pattern in <code>check_line</code> applies to <code>line</code>. …\nCommands for the debuuger\nSource file name\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nAdds a list of lookup paths to <code>cmd</code>’s dynamic library …\nThe name of the environment variable that holds dynamic …\nAppend an extension to the path, even if it already has …")