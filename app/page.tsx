import Link from "next/link"

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: "1",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {/* Left side - Product info */}
        <div
          style={{
            flex: "1",
            backgroundColor: "#065f46",
            color: "white",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minWidth: "300px",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "3rem",
              }}
            >
              <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>StashDash</span>
            </div>

            <div style={{ maxWidth: "36rem", marginBottom: "2rem" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                Manage your cannabis delivery business with ease
              </h2>
              <p style={{ fontSize: "1.125rem", color: "#d1fae5" }}>
                StashDash Admin provides everything you need to run your cannabis delivery service efficiently and
                securely.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <h3 style={{ fontWeight: "500", fontSize: "1.125rem" }}>Complete Order Management</h3>
                  <p style={{ color: "#d1fae5" }}>Track orders from placement to delivery with real-time updates.</p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <h3 style={{ fontWeight: "500", fontSize: "1.125rem" }}>Inventory Tracking</h3>
                  <p style={{ color: "#d1fae5" }}>
                    Manage your product catalog with automated stock alerts and reporting.
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <h3 style={{ fontWeight: "500", fontSize: "1.125rem" }}>Driver Management</h3>
                  <p style={{ color: "#d1fae5" }}>
                    Optimize delivery routes and track driver performance in real-time.
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                }}
              >
                <div>
                  <h3 style={{ fontWeight: "500", fontSize: "1.125rem" }}>Analytics & Reporting</h3>
                  <p style={{ color: "#d1fae5" }}>Make data-driven decisions with comprehensive business analytics.</p>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "3rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid #047857",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div>
                  <h4 style={{ fontWeight: "500" }}>Secure & Compliant</h4>
                  <p style={{ fontSize: "0.875rem", color: "#d1fae5" }}>Meets all regulatory requirements</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div>
                  <h4 style={{ fontWeight: "500" }}>Boost Efficiency</h4>
                  <p style={{ fontSize: "0.875rem", color: "#d1fae5" }}>Increase deliveries by up to 30%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login form */}
        <div
          style={{
            flex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            backgroundColor: "#f9fafb",
            minWidth: "300px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "28rem",
              backgroundColor: "white",
              borderRadius: "0.5rem",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
              border: "1px solid #e5e7eb",
            }}
          >
            <div style={{ padding: "1.5rem", textAlign: "center" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Sign in to StashDash</h2>
              <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                Enter your credentials to access the admin dashboard
              </p>
            </div>

            <div style={{ padding: "0 1.5rem 1.5rem 1.5rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    marginBottom: "0.5rem",
                  }}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="admin@stashdash.com"
                  style={{
                    width: "100%",
                    padding: "0.5rem 0.75rem",
                    borderRadius: "0.375rem",
                    border: "1px solid #d1d5db",
                    fontSize: "0.875rem",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <label
                    htmlFor="password"
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "500",
                    }}
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    style={{
                      fontSize: "0.75rem",
                      color: "#059669",
                      textDecoration: "none",
                    }}
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  style={{
                    width: "100%",
                    padding: "0.5rem 0.75rem",
                    borderRadius: "0.375rem",
                    border: "1px solid #d1d5db",
                    fontSize: "0.875rem",
                  }}
                />
              </div>

              <Link
                href="/dashboard"
                style={{
                  display: "inline-block",
                  width: "100%",
                  backgroundColor: "#059669",
                  color: "white",
                  fontWeight: "500",
                  fontSize: "0.875rem",
                  padding: "0.625rem 1.25rem",
                  borderRadius: "0.375rem",
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                Sign in
              </Link>

              <p
                style={{
                  marginTop: "1rem",
                  textAlign: "center",
                  fontSize: "0.875rem",
                  color: "#6b7280",
                }}
              >
                Don't have an account?{" "}
                <a
                  href="#"
                  style={{
                    color: "#059669",
                    textDecoration: "none",
                  }}
                >
                  Contact sales
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

