import React, { useState, useEffect } from "react";
import {
  Home,
  User,
  Mail,
  Calendar,
  ArrowLeft,
  ArrowRight,
  Heart,
  Share2 as Share,
  Github,
  Twitter,
  Linkedin,
  Phone,
  MapPin as Location,
  BookOpen,
  Users,
  Target,
  Rocket,
  HandHeart,
  Loader,
  AlertCircle,
} from "lucide-react";

// API URL
const API_URL = "https://api.slingacademy.com/v1/sample-data/blog-posts";

// Header Component
const Header = ({ currentView, onNavigate }) => {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: HandHeart },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center space-x-2 text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
          >
            <BookOpen className="w-8 h-8" />
            <span>ModernBlog</span>
          </button>

          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  currentView === item.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-bold">ModernBlog</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Discover amazing stories, insights, and ideas from our community
              of writers. Join us in exploring the world through words.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Github className="w-5 h-5" />
              </button>
              <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@modernblog.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+234 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Location className="w-4 h-4" />
                <span>Ibadan, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 ModernBlog. All rights reserved. Made with{" "}
            <Heart className="w-4 h-4 inline text-red-500" /> in Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};

// Loading Component
const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Loader className="w-12 h-12 animate-spin text-blue-600 mb-4" />
      <p className="text-gray-600">Loading amazing content...</p>
    </div>
  );
};

// Error Component
const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="text-center py-20">
      <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md mx-auto">
        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <div className="text-red-600 text-lg font-semibold mb-2">
          Oops! Something went wrong
        </div>
        <p className="text-red-700 mb-6">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

// Post Card Component
const PostCard = ({ post, onReadMore }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // console.log(post);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
      {post.photo_url && (
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={post.photo_url}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {post.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.created_at)}</span>
          </div>
          <button
            onClick={() => onReadMore(post.id)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Home Page Component
const HomePage = ({ posts, loading, error, onRetry, onReadMore }) => {
  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={onRetry} />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to <span className="text-blue-600">ModernBlog</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover amazing stories, insights, and ideas from our community of
          writers. Dive into a world of knowledge and inspiration.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {posts.length}
          </div>
          <div className="text-gray-600">Total Posts</div>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
          <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
          <div className="text-gray-600">Writers</div>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
          <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
          <div className="text-gray-600">Readers</div>
        </div>
      </div>

      {/* Posts Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Latest Posts
        </h2>
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <div className="text-gray-500 text-lg">No posts found</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} onReadMore={onReadMore} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About ModernBlog
        </h1>
        <p className="text-xl text-gray-600">
          Learn more about our mission and story
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              ModernBlog was founded with a simple mission: to create a platform
              where writers and readers can connect through powerful
              storytelling. We believe that every story matters and every voice
              deserves to be heard.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Since our launch, we've been committed to fostering a community of
              passionate writers and curious readers who share knowledge,
              experiences, and inspiration.
            </p>
          </div>
          <div className="text-center">
            <BookOpen className="w-20 h-20 text-blue-600 mx-auto mb-4" />
            <p className="text-gray-500">Empowering stories since 2024</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To democratize storytelling and make quality content accessible to
            everyone.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Our Community
          </h3>
          <p className="text-gray-600">
            A diverse community of writers, readers, and thinkers from around
            the world.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Rocket className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Our Vision
          </h3>
          <p className="text-gray-600">
            To be the leading platform for authentic, meaningful content and
            connections.
          </p>
        </div>
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Get In Touch</h1>
        <p className="text-xl text-gray-600">
          We'd love to hear from you. Send us a message!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us what's on your mind..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Info
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-800">Email</div>
                  <div className="text-gray-600">hello@modernblog.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 rounded-lg p-3">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-800">Phone</div>
                  <div className="text-gray-600">+234 (0) 123 456 789</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 rounded-lg p-3">
                  <Location className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-800">Location</div>
                  <div className="text-gray-600">Ibadan, Nigeria</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <HandHeart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Let's Connect
            </h3>
            <p className="text-gray-600 mb-4">
              Follow us on social media for updates
            </p>
            <div className="flex justify-center space-x-4">
              <button className="p-3 bg-white rounded-lg hover:shadow-md transition-all">
                <Github className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-3 bg-white rounded-lg hover:shadow-md transition-all">
                <Twitter className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-3 bg-white rounded-lg hover:shadow-md transition-all">
                <Linkedin className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Post Detail Component
const PostDetail = ({ post, loading, error, onRetry, onBack }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={onRetry} />;
  if (!post) return <ErrorMessage message="Post not found" />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Posts</span>
      </button>

      <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {post.photo && (
          <div className="aspect-video overflow-hidden bg-gray-100">
            <img
              src={post.photo}
              alt={post.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        )}

        <div className="p-8">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span className="font-medium">
                  {post.user_id ? `Author ${post.user_id}` : "Anonymous"}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.created_at)}</span>
              </div>
              {post.category && (
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                <Heart className="w-4 h-4" />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                <Share className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
              {post.content_text ||
                post.description ||
                "No content available for this post."}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentView, setCurrentView] = useState("home");
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [postLoading, setPostLoading] = useState(false);
  const [postError, setPostError] = useState("");

  // Fetch all posts
  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(`${API_URL}?offset=0&limit=100`);
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data.blogs || []);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Fetch specific post
  const fetchPost = async (postId) => {
    try {
      setPostLoading(true);
      setPostError("");
      const foundPost = posts.find((p) => p.id === parseInt(postId));
      if (!foundPost) {
        throw new Error("Post not found");
      }
      setSelectedPost(foundPost);
    } catch (err) {
      setPostError(err.message || "Something went wrong");
    } finally {
      setPostLoading(false);
    }
  };

  // Handle navigation
  const handleNavigate = (view) => {
    setCurrentView(view);
    setSelectedPostId(null);
    setSelectedPost(null);
    setPostError("");
  };

  const handleReadMore = (postId) => {
    setSelectedPostId(postId);
    setCurrentView("post");
    fetchPost(postId);
  };

  const handleRetryPost = () => {
    if (selectedPostId) {
      fetchPost(selectedPostId);
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchPosts();
  }, []);

  // Render current view
  const renderCurrentView = () => {
    switch (currentView) {
      case "home":
        return (
          <HomePage
            posts={posts}
            loading={loading}
            error={error}
            onRetry={fetchPosts}
            onReadMore={handleReadMore}
          />
        );
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "post":
        return (
          <PostDetail
            post={selectedPost}
            loading={postLoading}
            error={postError}
            onRetry={handleRetryPost}
            onBack={() => handleNavigate("home")}
          />
        );
      default:
        return (
          <HomePage
            posts={posts}
            loading={loading}
            error={error}
            onRetry={fetchPosts}
            onReadMore={handleReadMore}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header currentView={currentView} onNavigate={handleNavigate} />
      <main className="flex-grow">{renderCurrentView()}</main>
      <Footer />
    </div>
  );
};

export default App;
