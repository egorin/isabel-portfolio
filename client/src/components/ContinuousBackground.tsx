/**
 * Continuous Background Component
 * Single seamless gradient image spanning all sections
 */

export default function ContinuousBackground() {
  return (
    <div 
      className="fixed inset-0 w-full h-full -z-10"
      style={{
        backgroundImage: "url('https://private-us-east-1.manuscdn.com/sessionFile/wWIFqK2GRPPbGg2x0wmB1u/sandbox/vdf3CRDbZwxQODVPKpfJfo-img-1_1771303315000_na1fn_Ymctc2t5LWdyYWRpZW50LXYy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd1dJRnFLMkdSUFBiR2cyeDB3bUIxdS9zYW5kYm94L3ZkZjNDUkRiWnd4UU9EVlBLcGZKZm8taW1nLTFfMTc3MTMwMzMxNTAwMF9uYTFmbl9ZbWN0YzJ0NUxXZHlZV1JwWlc1MExYWXkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BFe6PRaWl4vDXEfhho32IEimQApiVOBgnm4-27wIlW31Oy~0ixjtgSci7Mee1hKdSO~n0-l2KMAYfbkMQ1YNCtZMssST-MWNdqWa0axpBAmHpOmTNtAk1YDpsbgwebKAbLRtt1w93nekBojd204YK2E1TO1UJyxEZnk5xmKd6Rpob5VCH9E6sP9lzG44Yf-Bc4kg6JnsaBCQeel8U3YFfG-o~iSXJvxl0HqpgiGpBCpBoA7yaw0HjQNN1D-fKGDkogyAkWEGgTl8k2p2xA1sgFdvOnC~7JzQeIF7vNZICsrxFKxtst5eJXROcFhSvp-pgwqQPGqYUZ1JzCof23iY9A__')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    />
  );
}
